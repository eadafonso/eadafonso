import { Header } from "../../components/Header";
import { posts } from "../../data";

export default function Home() {
  return (
    <>
      <main className="max-w-[60ch] mx-auto w-full space-y-6 h-[100vh] px-7 lg:p-0">
        <Header showDescription={true} />

        <h4 className="font-medium text-[16px]">Últimos artigos</h4>

        <ul className="flex flex-col gap-5">
          {posts.map((post, index) => (
            <li key={index}>
              <a
                href={`/eadafonso/posts/${post.slug}`}
                className="text-[15px] text-blue-600 font-medium"
              >
                - {post.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
