import{j as e}from"./index-CqFI4o8M.js";function o(s){const a={code:"code",p:"p",pre:"pre",...s.components};return e.jsxs("div",{className:"flex flex-col gap-4 pb-10",children:[e.jsx("h2",{className:"font-semibold",children:"Minha stack para desenvolvimento Front-End"})," ",e.jsx("span",{className:"tracking-normal text-slate-700",children:e.jsxs(a.p,{children:[`Ao longo do tempo, experimentei várias tecnologias e metodologias, e hoje
encontrei uma stack que me permite construir aplicações robustas e de alto
desempenho. Neste artigo, compartilho meu stack de ferramentas favoritas e por
que escolho cada uma delas. E sim, eu sou team`," ",`
`,e.jsx("a",{className:"text-blue-600 font-semibold",href:"https://react.dev/",children:"React."})]})})," ",e.jsx("h3",{className:"font-medium",children:"1.Framework (Next.Js)"}),e.jsx("span",{className:"tracking-normal text-slate-700",children:e.jsxs(a.p,{children:["O ",e.jsx("a",{className:"text-blue-600 font-semibold",href:"https://nextjs.org/",children:"Next.js"}),` não só facilita o desenvolvimento de aplicações React com
renderização no servidor, mas também permite a criação de APIs integradas.
Além disso, ele oferece suporte a Server Components, o que permite buscar e
renderizar dados no lado do servidor com maior eficiência, melhorando a
experiência do usuário.`]})})," ",e.jsx("h3",{className:"font-medium",children:"1.1.Vite"}),e.jsx("span",{className:"tracking-normal text-slate-700",children:e.jsxs(a.p,{children:[`Em projectos onde o uso de um framework completo não é necessário, escolho o
Vite. `,e.jsx("a",{className:"text-blue-600 font-semibold",href:"https://vite.dev/",children:"O Vite"}),` é uma ferramenta de construção rápida e eficiente, projectada
para melhorar a experiência de desenvolvimento com tempos de compilação
reduzidos. Ele é excelente para projetos menores ou que requerem uma
configuração mais leve.`]})}),e.jsx("h3",{className:"font-medium",children:"2.Busca de dados"}),e.jsx("span",{className:"tracking-normal text-slate-700",children:e.jsx(a.p,{children:"Para buscar dados, uso diferentes abordagens dependendo do tipo de projeto:"})}),e.jsxs("ul",{children:[e.jsxs("li",{className:"text-slate-700",children:[e.jsx("strong",{children:"- Server Components no Next.js:"}),` Quando uso Next.js, a maioria dos dados a busca é feita no lado do servidor através
dos Server Components. Essa abordagem melhora o desempenho da aplicação e reduz a quantidade de código JavaScript enviado
ao cliente.`]}),e.jsx("br",{}),e.jsx("pre",{children:e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-javascript",children:`  export default async function Page() {
    let data = await fetch('https://api.app/posts')
    let posts = await data.json()
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }
`})})}),e.jsx("br",{}),e.jsxs("li",{className:"text-slate-700",children:[e.jsx("strong",{children:"- React Query para busca no cliente: "}),` Para projectos em Vite ou mesmo em Next.js, quando preciso fazer buscas de dados no lado do cliente, React Query é a biblioteca de escolha.
Ela facilita gerenciar cache, estados de carregamento, e actualizações automáticas de dados, melhora a performance da aplicação e
oferece uma experiência de usuário mais fluida.`]})]}),e.jsx("h3",{className:"font-medium",children:"3.Estilização: Tailwind CSS e Shadcn UI"}),e.jsx("span",{className:"tracking-normal text-slate-700",children:e.jsxs(a.p,{children:["Para o design e estilização, utilizo uma combinação de ",e.jsx("a",{href:"https://tailwindcss.com/",className:"text-blue-600 font-medium",children:"Tailwind CSS"})," e ",e.jsx("a",{href:"https://ui.shadcn.com/",className:"text-blue-600 font-medium",children:"Shadcn UI"}),`. O Tailwind CSS é um framework de utilidades que me permite criar
componentes estilizados rapidamente, com classes que facilitam o controle detalhado sobre o layout e estilos. `,e.jsx("br",{})," ",e.jsx("br",{}),` Já o Shadcn UI oferece uma coleção de
componentes prontos e personalizáveis que se integram muito bem ao Tailwind CSS, acelerando o desenvolvimento sem comprometer a flexibilidade no design.`]})}),e.jsx("h3",{className:"font-medium",children:"4.Outras:"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("span",{children:[e.jsx("strong",{children:"Autenticação:"})," ",e.jsx("a",{href:"https://firebase.google.com/docs/auth",className:"text-blue-600 font-medium",children:"Firebase Authentication"})]}),e.jsxs("span",{children:[e.jsx("strong",{children:"Storage:"})," ",e.jsx("a",{href:"https://firebase.google.com/docs/storage",className:"text-blue-600 font-medium",children:"Firebase Storage"})]}),e.jsxs("span",{children:[e.jsx("strong",{children:"Base de dados:"})," ",e.jsx("a",{href:"https://www.postgresql.org/",className:"text-blue-600 font-medium",children:"PostgreSQL"})]}),e.jsxs("span",{children:[e.jsx("strong",{children:"ORM:"})," ",e.jsx("a",{href:"https://www.prisma.io/",className:"text-blue-600 font-medium",children:"Prisma"})]})]})]})}function n(s={}){const{wrapper:a}=s.components||{};return a?e.jsx(a,{...s,children:e.jsx(o,{...s})}):o(s)}export{n as default};
