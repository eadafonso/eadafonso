import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { posts } from "../../data";

export default function Home() {
  return (
    <>
      <main className="max-w-[60ch] mx-auto w-full space-y-6 h-[100vh]">
        <Header showDescription={true} />

        <h4 className="font-medium text-[16px]">Últimos artigos</h4>

        <ul className="h-[70vh] flex flex-col gap-5">
          {posts.map((post, index) => (
            <li key={index}>
              <a
                href={`/posts/${post.slug}`}
                className="text-[15px] text-blue-600 font-medium"
              >
                - {post.title}
              </a>
            </li>
          ))}
        </ul>

        <Footer />
      </main>
    </>
  );
}
