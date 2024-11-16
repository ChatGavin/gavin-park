// 使用简洁的 svg 图标，否则会导致最终无法加载
import GithubSvg from './svg/github.svg?react'
import AntdSvg from './svg/antd.svg?react'
import ViteSvg from './svg/vite.svg?react'
import ReactSvg from './svg/react.svg?react'
import BookSvg from './svg/book.svg?react'
import FileSearchSvg from './svg/file-search.svg?react'
// 映射表
const SvgMap = {
    github: GithubSvg,
    antd: AntdSvg,
    vite: ViteSvg,
    react: ReactSvg,
    book: BookSvg,
    fileSearch: FileSearchSvg,
}
// eslint-disable-next-line react/prop-types
const SvgIcon = ({name = '', size = 24, width = size, height = size}) => {
    const SvgComponent = SvgMap[name];
    if (!SvgComponent) return null;
    return (
        <SvgComponent width={width} height={height}/>
    )
}

export default SvgIcon;
