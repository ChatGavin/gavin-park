//
import AntdSvg from './svg/antd.svg?react'
import ViteSvg from './svg/vite.svg?react'
import ReactSvg from './svg/react.svg?react'
// 映射表
const SvgMap = {
    antd: AntdSvg,
    vite: ViteSvg,
    react: ReactSvg,
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
