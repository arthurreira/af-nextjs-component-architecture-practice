import * as runtime from "react/jsx-runtime"
import type React from "react"

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

type MDXContentProps = {
  code: string
  components?: Record<string, React.ComponentType>
}

export function MDXContent({ code, components }: MDXContentProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
