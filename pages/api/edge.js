export default async function handler() {
  return Response.json({
    reason: AbortSignal.reason,
    throwIfAborted: AbortSignal.throwIfAborted,
    abort: AbortSignal.abort,
    timeout: AbortSignal.timeout,
  })
}

export const config = { runtime: "experimental-edge" }
