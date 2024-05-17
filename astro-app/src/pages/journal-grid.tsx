import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { useEffect, useState } from "react";
import * as i18next from "i18next";

export default function Journals(props: { url: string }) {
  const [res, setRes] = useState<JournalsResponse>();

  useEffect(() => {
    fetch(props.url + "/journals?sort[0]=createdAt:asc")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRes(data);
      });
  }, []);

  return (
    <section className="md:columns-2 lg:columns-3 gap-5 p-5 align-middle ">
      <h1>{i18next.t('home.article-list', {total: res?.data.length ?? 0})}</h1>
      
      {res?.data.map((e) => (
        <article className="first:m-0 break-inside-avoid mt-5 p-5 border-zinc-200 border-2 rounded shadow-lg">
          <h2 className="text-lg font-semibold font-mono">
            {e.attributes.title}
          </h2>
          <BlocksRenderer
            content={e.attributes.content}
            blocks={{
              paragraph: ({ children }) => (
                <p className="text-neutral900 max-w-prose">{children}</p>
              ),
              heading: ({ children, level }) => {
                switch (level) {
                  case 1:
                    return (
                      <h1 className="text-5xl font-extrabold">{children}</h1>
                    );
                  case 2:
                    return <h2 className="text-4xl font-bold">{children}</h2>;
                  case 3:
                    return <h3 className="text-3xl font-bold">{children}</h3>;
                  case 4:
                    return <h4 className="text-2xl font-bold">{children}</h4>;
                  case 5:
                    return <h5 className="text-xl font-bold">{children}</h5>;
                  case 6:
                    return <h6 className="text-lg font-bold">{children}</h6>;
                  default:
                    return <p>{children}</p>;
                }
              },
              quote: ({ children }) => (
                <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50">
                  <p className="italic font-medium leading-relaxed text-gray-900">
                    {children}
                  </p>
                </blockquote>
              ),
            }}
            modifiers={{
              bold: ({ children }) => (
                <strong className="font-bold">{children}</strong>
              ),
              italic: ({ children }) => (
                <span className="italic">{children}</span>
              ),
            }}
          />
        </article>
      ))}
    </section>
  );
}

type JournalsResponse = {
  data: Journal[];
};

type Journal = {
  id: number;
  attributes: {
    title: string;
    content: BlocksContent;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
};
