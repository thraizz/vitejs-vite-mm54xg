import { delay, http, HttpResponse, HttpHandler } from 'msw';

const handlers: HttpHandler[] = [
  http.get('https://jsonplaceholder.typicode.com/posts2', async () => {
    await delay(1000);

    return new HttpResponse(JSON.stringify({ key1: 'value1' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
export default handlers;
