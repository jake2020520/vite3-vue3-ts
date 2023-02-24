// ant design vue library
import {
  ConfigProvider,
  Layout,
  Input,
  InputNumber,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Form,
  // FormModel,
  // Icon,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Badge,
  Popover,
  Dropdown,
  List,
  Avatar,
  Breadcrumb,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Alert,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  Upload,
  Progress,
  Skeleton,
  Popconfirm,
  PageHeader,
  Result,
  Statistic,
  Descriptions,
  // message,
  // notification,
  Collapse,
  Timeline,
  AutoComplete,
  Transfer,
  TreeSelect,
  Pagination,
  Tree,
  Cascader,
  Anchor,
  Carousel,
  BackTop,
  Empty,
} from "ant-design-vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const importAntd: any = (Vue: any) => {
  Vue.use(ConfigProvider);
  Vue.use(Layout);
  Vue.use(Input);
  Vue.use(InputNumber);
  Vue.use(Button);
  Vue.use(Switch);
  Vue.use(Radio);
  Vue.use(Checkbox);
  Vue.use(Select);
  Vue.use(Card);
  Vue.use(Form);
  // Vue.use(FormModel);
  // Vue.use(Icon);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Modal);
  Vue.use(Table);
  Vue.use(Tabs);
  Vue.use(Badge);
  Vue.use(Popover);
  Vue.use(Dropdown);
  Vue.use(List);
  Vue.use(Avatar);
  Vue.use(Breadcrumb);
  Vue.use(Steps);
  Vue.use(Spin);
  Vue.use(Menu);
  Vue.use(Drawer);
  Vue.use(Tooltip);
  Vue.use(Alert);
  Vue.use(Tag);
  Vue.use(Divider);
  Vue.use(DatePicker);
  Vue.use(TimePicker);
  Vue.use(Upload);
  Vue.use(Progress);
  Vue.use(Skeleton);
  Vue.use(Popconfirm);
  Vue.use(PageHeader);
  Vue.use(Result);
  Vue.use(Statistic);
  Vue.use(Descriptions);
  Vue.use(Collapse);
  Vue.use(Timeline);
  Vue.use(AutoComplete);
  Vue.use(Transfer);
  Vue.use(TreeSelect);
  Vue.use(Pagination);
  Vue.use(Tree);
  Vue.use(Cascader);
  Vue.use(Anchor);
  Vue.use(Carousel);
  Vue.use(BackTop);
  Vue.use(Empty);

  process.env.NODE_ENV !== "production" &&
    console.warn("ant design use lazy-load !");
};

export default importAntd;
