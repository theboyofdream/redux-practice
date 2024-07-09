import { ReactNode, useMemo } from "react"

const EMOJIS = [
  '(づ ◕‿◕ )づ',
  '٩(◕‿◕)۶',
  '( ๑‾̀◡‾́)σ"',
  '(͡o‿O͡) ***',
  '(◐ω◑ )',
  '⸂⸂⸜(രᴗര๑)⸝⸃⸃',
  '⸂⸂⸜(രᴗര๑)⸝⸃⸃',
  '( ˶⚈Ɛ⚈˵)',
  'ʕ•́ᴥ•̀ʔっ',
]

type EmptyProps = {
  showEmoji?: boolean
  text?: string
  children?: ReactNode
}

export function Empty({
  showEmoji = true,
  text,
  children
}: EmptyProps) {
  const emoji = useMemo(() => EMOJIS[Math.floor(Math.random() * EMOJIS.length)], [])
  return (
    <div className="min-h-40 flex flex-col justify-center items-center">
      <h4 className="text-muted-foreground">
        {showEmoji && emoji}
      </h4>
      <p className="text-muted-foreground text-sm mb-2">
        {text}
      </p>
      {children}
    </div>
  )
}