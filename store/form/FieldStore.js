import {makeAutoObservable} from "mobx";
import Fields from "./Fields.js";

class FieldStore {

    constructor() {
        makeAutoObservable(this);
    }

    // 获取所有字段
    getFields() {
        return Fields;
    }

    // 设置激活状态
    setActive(name) {
        Fields.forEach(item => {
            item.active = item.name === name;
        });
    }
}

export default new FieldStore();
