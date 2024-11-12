//
import ProFormText from "@view/form/fields/ProFormText.jsx";
import ProFormDigit from "@view/form/fields/ProFormDigit.jsx";

// 表单字段
export default [
    {
        active: true,
        name: 'ProFormText',
        desc: '用于输入各类文本',
        component: ProFormText
    },
    {
        active: false,
        name: 'ProFormDigit',
        desc: '用于输入数字，它自带了一个格式化',
        component: ProFormDigit
    }
]
