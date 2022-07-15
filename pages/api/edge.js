export default async function handler() {
  return Response.json({
    type: "edge",
    reason: "reason" in AbortSignal,
    throwIfAborted: "throwIfAborted" in AbortSignal,
    abort: "abort" in AbortSignal,
    timeout: "timeout" in AbortSignal,
  })
}

export const config = { runtime: "experimental-edge" }
