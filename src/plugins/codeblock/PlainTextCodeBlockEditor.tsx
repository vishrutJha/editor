import React from 'react'
import type { CodeBlockEditorProps } from './index'
import { useCodeBlockEditorContext } from './CodeBlockNode'

export const PlainTextCodeBlockEditor = ({ code }: CodeBlockEditorProps) => {
  const { setCode } = useCodeBlockEditorContext()

  return (
    <div
      onKeyDown={(event) => {
        event.nativeEvent.stopImmediatePropagation()
      }}
    >
      <textarea
        rows={3}
        cols={20}
        value={code}
        onChange={(event) => {
          setCode(event.target.value)
        }}
      />
    </div>
  )
}
