import {makeAutoObservable, observable} from "mobx";
import Fields from "./Fields.js";

class FieldStore {

    constructor() {
        // 确保 Fields 是响应式的
        this.Fields = observable(Fields);
        makeAutoObservable(this);
    }

    // 获取所有字段
    getFields() {
        return this.Fields;
    }

    // 设置激活状态
    setActive(name) {
        if (!name) return;
        this.Fields.forEach(item => {
            item.active = item.name === name;
        });
    }

    // 获取激活的组件
    getActiveComponent() {
        return this.Fields.find(item => item.active).component;
    }
}

export default new FieldStore();
