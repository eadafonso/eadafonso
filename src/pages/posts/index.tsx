import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";

export default function Posts() {
  const { slug } = useParams();
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import(`../../posts/${slug}.mdx`)
      .then((module) => setContent(() => module.default))
      .catch(() => setContent(null));
  }, [slug]);

  return (
    <main className="max-w-[60ch] mx-auto w-full space-y-6 h-[100vh] px-7 lg:p-0">
      <Header showDescription={false} />

      <MDXProvider>{Content ? <Content /> : <p>A carregar ...</p>}</MDXProvider>
    </main>
  );
}
