export default async function handler(_, res) {
  res.json({
    reason: AbortSignal.reason,
    throwIfAborted: AbortSignal.throwIfAborted,
    abort: AbortSignal.abort,
    timeout: AbortSignal.timeout,
  })
}
