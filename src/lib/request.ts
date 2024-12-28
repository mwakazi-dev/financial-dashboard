type RequestHandlerOptions = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: Record<string, any>;
  headers?: Record<string, string>;
};

const requestHandler = async (
  endpoint: string,
  options: RequestHandlerOptions = {},
) => {
  const { method = 'GET', body, headers } = options;

  try {
    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const responseText = await response.text();
    try {
      return JSON.parse(responseText);
    } catch (_) {
      throw new Error('Response is not a valid JSON');
    }
  } catch (error) {
    throw error;
  }
};

export default requestHandler;
