/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface PropsTitle{
  title: string;
}
class Component<T>{
  constructor (public props:T) {

  }
}

class Page extends Component<PropsTitle> {
  pageInfo (): void{
    console.log(this.props.title);
  }
}

const pageProps: PropsTitle = { title: "Hello" };
const page = new Page(pageProps);
page.pageInfo();
export {};