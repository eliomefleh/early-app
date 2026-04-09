const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/ai', async (req, res) => {
  const { system, messages } = req.body;
  if (!system || !messages) return res.status(400).json({ error: 'Missing fields' });
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        system,
        messages: Array.isArray(messages) ? messages : [{ role: 'user', content: messages }]
      })
    });
    const data = await response.json();
    if (!response.ok || !data.content?.[0]?.text) {
      console.error('Anthropic API error:', JSON.stringify(data));
      return res.status(502).json({ error: data.error?.message || 'Empty response from AI', raw: data });
    }
    res.json({ text: data.content[0].text });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Early running on port ${PORT}`));
