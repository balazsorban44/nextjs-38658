export default async function handler(_, res) {
  res.json({
    type: "node",
    reason: !!AbortSignal.reason,
    throwIfAborted: !!AbortSignal.throwIfAborted,
    abort: !!AbortSignal.abort,
    timeout: !!AbortSignal.timeout,
  })
}
