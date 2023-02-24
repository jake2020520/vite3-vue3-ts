import {
  defineComponent,
  ref,
  toRefs,
  onMounted,
  reactive,
  h,
  resolveComponent,
} from "vue";
import locale from "ant-design-vue/es/date-picker/locale/zh_CN";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { FormInstance } from "ant-design-vue";
import type { FormProps } from "ant-design-vue";

export default defineComponent({
  name: "job-structure-view",
  components: {
    UserOutlined,
  },
  props: {
    formConfig: {
      type: Object,
      default: () => ({ id: "", config: [] }),
    },
  },
  setup(props: any, { emit, expose }) {
    const formRef = ref<FormInstance>();
    const { formConfig } = toRefs(props);
    const formState = reactive<any>({});
    //  设置默认值
    (formConfig as any).value?.config?.forEach((item: any) => {
      if (item.type !== "button") {
        formState[item.id] = item[item.id];
        item.otherId && (formState[item.otherId] = item[item.otherId]);
      }
    });
    // console.log("setup formConfig ", formConfig, formState);

    const handleFinish: FormProps["onFinish"] = (values) => {
      // console.log("handleFinish: ", values, formState);
      (formConfig as any).value?.requestList(formState);
    };

    const resetForm = () => {
      formRef.value?.resetFields();
      (formConfig as any).value?.requestList();
    };
    // 外面方法用的
    const getFormData = () => {
      let param: any = formRef.value?.getFieldsValue();
      param.reset = undefined;
      param.submit = undefined;
      return param;
    };

    const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
      console.log(errors);
    };
    expose({
      getFormData,
    });
    onMounted(() => {
      // console.log("formConfig: ", formConfig);
    });

    return () => {
      return (
        <a-form
          layout="inline"
          ref={formRef}
          model={formState}
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
          style={{ marginBottom: "10px" }}
        >
          {(formConfig as any)?.value.config?.map((config: any) => {
            let actionFun: any;
            switch (config.id) {
              case "reset":
                actionFun = resetForm;
                break;
              case "submit":
                actionFun = handleFinish;
                break;
              default:
                actionFun = () => config.actionFun(formState);
            }
            return (
              <a-form-item
                key={config.id}
                label={config.label}
                name={config.id}
                style={{ marginBottom: "10px" }}
              >
                {config.type === "input" && (
                  <a-input
                    v-model:value={(formState as any)[config.id]}
                    {...config.attributes}
                    v-slots={{
                      [config.slot?.name]: () => {
                        return h(resolveComponent(config.slot?.content));
                      },
                    }}
                  ></a-input>
                )}
                {config.type === "input-group" && (
                  <a-input-group compact={config.compact}>
                    <a-form-item>
                      <a-select
                        v-model:value={(formState as any)[config.otherId]}
                      >
                        {config?.otherOptions?.selectOptions.map(
                          (item: any) => (
                            <a-select-option value={item.value}>
                              {item.label}
                            </a-select-option>
                          )
                        )}
                      </a-select>
                    </a-form-item>
                    <a-input
                      v-model:value={(formState as any)[config.id]}
                      {...config.attributes}
                    />
                  </a-input-group>
                )}
                {config.type === "select" && (
                  <a-select
                    v-model:value={(formState as any)[config.id]}
                    {...config.attributes}
                  >
                    {config?.selectOptions?.map((item: any) => (
                      <a-select-option value={item.value}>
                        {item.label}
                      </a-select-option>
                    ))}
                  </a-select>
                )}
                {config.type === "range-picker" && (
                  <a-range-picker
                    v-model:value={(formState as any)[config.id]}
                    locale={locale}
                    {...config.attributes}
                  />
                )}
                {config.type === "button" && (
                  <a-button {...config.attributes} onClick={actionFun}>
                    {config.options.label}
                  </a-button>
                )}
              </a-form-item>
            );
          })}
        </a-form>
      );
    };
  },
});
