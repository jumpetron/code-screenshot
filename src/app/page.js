'use client'

import { useEffect, useRef, useState } from 'react'

import { Resizable } from 're-resizable'
import { ResetIcon } from '@radix-ui/react-icons'
import CodeEditor from '../components/CodeEditor'
import { cn } from '../lib/utils.js'
import { themes, fonts } from '../options.js'
import { Card, CardContent } from '../components/ui/card'
import ExportOptions from './../components/controls/ExportOptions'
import ThemeSelect from './../components/controls/ThemeSelect'
import LanguageSelect from './../components/controls/LanguageSelect'
import FontSelect from './../components/controls/FontSelect'
import FontSizeInput from './../components/controls/FontSizeInput'
import PaddingSlider from './../components/controls/PaddingSlider'
import BackgroundSwitch from './../components/controls/BackgroundSwitch'
import DarkModeSwitch from './../components/controls/DarkModeSwitch'
import { Button } from '../components/ui/button'
import WidthMeasurement from '../components/WidthMeasurement'
import useStore from '@/store'
import Head from 'next/head'
import TopContent from '@/components/TopContent'
import FooterContent from '@/components/FooterContent'

export default function Home() {
  const [width, setWidth] = useState('auto')
  const [showWidth, setShowWidth] = useState(false)

  const theme = useStore((state) => state.theme)
  const padding = useStore((state) => state.padding)
  const fontStyle = useStore((state) => state.fontStyle)
  const showBackground = useStore((state) => state.showBackground)
  const editorRef = useRef(null)

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    if (queryParams.size === 0) return
    const state = Object.fromEntries(queryParams)

    useStore.setState({
      ...state,
      code: state.code ? atob(state.code) : '',
      autoDetectLanguage: state.autoDetectLanguage === 'true',
      darkMode: state.darkMode === 'true',
      fontSize: Number(state.fontSize || 18),
      padding: Number(state.padding || 64)
    })
  }, [])
  return (
    <>
      <main className='relative inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] px-8  dark min-h-screen flex justify-center flex-col gap-10 items-center bg-neutral-950 text-white pt-12'>
        <TopContent />
        <Card className='py-6 px-8 mx-6 bg-neutral-900/90 backdrop-blur'>
          <CardContent className='flex flex-wrap gap-6 p-0 '>
            <ThemeSelect />
            <LanguageSelect />
            <FontSelect />
            <FontSizeInput />
            <PaddingSlider />
            <BackgroundSwitch />
            <DarkModeSwitch />
            <div className='w-px bg-neutral-800' />
            <div className='place-self-center'>
              <ExportOptions targetRef={editorRef} />
            </div>
          </CardContent>
        </Card>
        <link
          rel='stylesheet'
          href={themes[theme].theme}
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href={fonts[fontStyle].src}
          crossOrigin='anonymous'
        />

        <Resizable
          enable={{ left: true, right: true }}
          minWidth={padding * 2 + 400}
          maxWidth={padding * 2 + 800}
          size={{ width }}
          onResize={(e, dir, ref) => setWidth(ref.offsetWidth)}
          onResizeStart={() => setShowWidth(true)}
          onResizeStop={() => setShowWidth(false)}>
          <div
            className={cn(
              'overflow-hidden mb-10 transition-all ease-out',
              showBackground
                ? themes[theme].background
                : 'ring ring-neutral-900'
            )}
            style={{ padding }}
            ref={editorRef}>
            <CodeEditor />
          </div>
          <WidthMeasurement showWidth={showWidth} width={width} />
          <div
            className={cn(
              'transition-opacity w-fit mx-auto -mt-4',
              showWidth || width === 'auto'
                ? 'invisible opacity-0'
                : 'visible opacity-100'
            )}>
            <Button size='sm' onClick={() => setWidth('auto')} variant='ghost'>
              <ResetIcon className='mr-2' />
              Reset width
            </Button>
          </div>
        </Resizable>
        <FooterContent />
      </main>
    </>
  )
}
