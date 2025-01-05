import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// Enable CORS for port 5173
app.use('*', cors({
  origin: ['http://localhost:5173', 'https://launch-mom.vercel.app'],
}));

const CLIENT_ID = 'Ov23li3zEh41OeusUfbi';
const CLIENT_SECRET = 'fde3642bcba3c22ec5e58c317fc53e219246afa7';

app.get('/getAccessToken', async (c) => {
  const code = c.req.query('code') || '';
  console.log(code);

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: code,
  });

  try {
    const response = await fetch(`https://github.com/login/oauth/access_token?${params.toString()}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    });

    const data = await response.json() || null;
    console.log(data);
    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Failed to get access token' }, 500);
  }
});

app.get('/getUserData', async (c) => {
  const authHeader = c.req.header('Authorization');
  console.log("Backend authHeader:", authHeader);

  if (!authHeader) {
    return c.json({ error: 'Authorization header is missing' }, 400);
  }

  await fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      Authorization: authHeader,
    },
  })
    .then((response) => response.json())  // Parse the response as JSON
    // .then((data: any) => {
    //   console.log(data);
    //   return c.json(data);  // Return the data to the client
    // })
    // .catch((error) => {
    //   console.log(error);  // Log any errors
    //   return c.json({ error: 'An error occurred while fetching user data' }, 500);
    // });
});


export default app;
