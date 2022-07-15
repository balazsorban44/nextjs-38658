console.log({
  type: "node",
  reason: !!AbortSignal.reason,
  throwIfAborted: !!AbortSignal.throwIfAborted,
  abort: !!AbortSignal.abort,
  timeout: !!AbortSignal.timeout,
})
