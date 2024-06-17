import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import { themes } from './../../options'
import useStore from './../../store'

export default function ThemeSelect() {
  const theme = useStore((state) => state.theme)

  return (
    <div>
      <label className=' block mb-2 text-xs font-medium text-neutral-400'>
        Theme
      </label>
      <Select
        value={theme}
        onValueChange={(theme) => useStore.setState({ theme })}>
        <SelectTrigger className='w-40'>
          <SelectValue placeholder='Select Theme' />
        </SelectTrigger>
        <SelectContent className='dark'>
          {Object.entries(themes).map(([name, theme]) => (
            <SelectItem key={name} value={name}>
              {console.log(theme.background)}
              <div className=' flex gap-2 items-center'>
                <div className={`h-4 w-4 rounded-full ${theme.background}`} />
                <span className='capitalize'>{name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
