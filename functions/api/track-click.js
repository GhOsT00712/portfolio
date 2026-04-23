export async function onRequest(context) {
    if (context.request.method !== 'POST') {
        return new Response('Method not allowed', {
            status: 405,
            headers: { Allow: 'POST' },
        });
    }

    let payload;

    try {
        payload = await context.request.json();
    } catch {
        return new Response('Invalid JSON', { status: 400 });
    }

    const event = typeof payload?.event === 'string' ? payload.event.trim() : '';
    if (!event) {
        return new Response('Missing event', { status: 400 });
    }

    const href = typeof payload?.href === 'string' ? payload.href.trim() : '';
    const label = typeof payload?.label === 'string' ? payload.label.trim() : '';
    const location = typeof payload?.location === 'string' ? payload.location.trim() : '';
    const country = typeof context.request.cf?.country === 'string' ? context.request.cf.country : '';

    context.env.ANALYTICS.writeDataPoint({
        blobs: [event, label, href, location, country],
        doubles: [1],
        indexes: [event],
    });

    return new Response(null, { status: 204 });
}
