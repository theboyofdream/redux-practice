import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

type WidgetProps = {
  title: string
  children: ReactNode
}

export function Widget({
  title,
  children
}: WidgetProps) {
  return (
    <Card className="flex-[1_1_320px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}