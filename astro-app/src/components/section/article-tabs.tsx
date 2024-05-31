import { useState } from "react";
import type { AnnualReportListType, AnnualReportType } from "../../types/entities/annual-report";
import type { NewsListType, NewsType } from "../../types/entities/news";
import type { PressReleaseListType, PressReleaseType } from "../../types/entities/press-release";
import { cn } from "../../utils/cn";
import slugify from "../../functions/slugify";
import type { ArticleConfigType } from "../../types/home";

enum ArticleTabsEnum {
  news = "news",
  pressRelease = "press-release",
  annual = "annual-report",
}

interface ArticleTabsProps {
  baseUrl: string;
  config: ArticleConfigType;
  news: NewsListType;
  press: PressReleaseListType;
  annual: AnnualReportListType;
}

export default function ArticleTabs(props: ArticleTabsProps) {
  const [tab, setTab] = useState(ArticleTabsEnum.news);

  const data: Map<
    ArticleTabsEnum,
    (NewsType | PressReleaseType | AnnualReportType)[]
  > = new Map([
    [ArticleTabsEnum.news, props.news?.data ?? []],
    [ArticleTabsEnum.pressRelease, props.press?.data ?? []],
    [ArticleTabsEnum.annual, props.annual?.data ?? []],
  ]);

  return (
    <>
      <div className="flex gap-2">
        <h1
          className={cn(
            "font-bold text-xl cursor-pointer hover:text-red-500",
            tab == ArticleTabsEnum.news
              ? "underline text-black"
              : "text-blue-500",
            props.config?.newsButton.classList ?? ""
          )}
          onClick={() => setTab(ArticleTabsEnum.news)}
        >
          {props.config?.newsButton.label ?? ''}
        </h1>
        <span>-</span>
        <h1
          className={cn(
            "font-bold text-xl cursor-pointer hover:text-red-500",
            tab == ArticleTabsEnum.pressRelease
              ? "underline text-black"
              : "text-blue-500",
            props.config?.pressReleaseButton.classList ?? ""
          )}
          onClick={() => setTab(ArticleTabsEnum.pressRelease)}
        >
          {props.config?.pressReleaseButton.label ?? ''}
        </h1>
        <span>-</span>
        <h1
          className={cn(
            "font-bold text-xl cursor-pointer hover:text-red-500",
            tab == ArticleTabsEnum.annual
              ? "underline text-black"
              : "text-blue-500",
            props.config?.annualReportButton.classList ?? ""
          )}
          onClick={() => setTab(ArticleTabsEnum.annual)}
        >
          {props.config?.annualReportButton.label ?? ''}
        </h1>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        {data.get(tab)?.map((e) => {
          switch (tab) {
            case ArticleTabsEnum.news:
              return <NewsItem news={e} baseUrl={props.baseUrl} />;
            case ArticleTabsEnum.pressRelease:
              return <PressReleaseItem press={e} baseUrl={props.baseUrl} />;
            case ArticleTabsEnum.annual:
              return (
                <AnnualReportItem annualReport={e} baseUrl={props.baseUrl} />
              );
          }
        })}
      </div>
    </>
  );
}

function NewsItem(props: { news: NewsType; baseUrl: string }) {
  const { news, baseUrl } = props;
  const date = new Date(news.attributes.createdAt);
  return (
    <div
      key={"news-item-" + news.id}
      className="max-h-80 w-3/12 rounded-lg shadow-lg bg-white overflow-clip"
    >
      <img
        alt=""
        src={baseUrl + news.attributes.image.data.attributes.url}
        className="h-3/6 w-full bg-cover"
      />
      <div className="flex flex-col justify-between px-3">
        <div className="py-3 flex flex-col gap-1 h-2/4">
          <a
            className="font-semibold text-lg line-clamp-1 hover:underline"
            href={`/news/${news.id}/${slugify(news.attributes.title)}`}
            aria-label={news.attributes.title}
          >
            {news.attributes.title}
          </a>
          <p className="line-clamp-3">{news.attributes.briefDescription}</p>
        </div>
        <p className="text-gray-400 ">{date.toDateString()}</p>
      </div>
    </div>
  );
}

function PressReleaseItem(props: { press: PressReleaseType; baseUrl: string }) {
  const { press, baseUrl } = props;
  const date = new Date(press.attributes.createdAt);
  return (
    <div
      key={"news-item-" + press.id}
      className="max-h-80 w-3/12 rounded-lg shadow-lg bg-white overflow-clip"
    >
      <img
        alt=""
        src={baseUrl + press.attributes.image.data.attributes.url}
        className="h-3/6 w-full bg-cover"
      />
      <div className="flex flex-col justify-between px-3">
        <div className="py-3 flex flex-col gap-1 h-2/4">
          <a
            className="font-semibold text-lg line-clamp-1 hover:underline"
            href={`/press-release/${press.id}/${slugify(
              press.attributes.title
            )}`}
            aria-label={press.attributes.title}
          >
            {press.attributes.title}
          </a>
          <p className="line-clamp-3">{press.attributes.briefDescription}</p>
        </div>
        <p className="text-gray-400 ">{date.toDateString()}</p>
      </div>
    </div>
  );
}

function AnnualReportItem(props: {
  annualReport: AnnualReportType;
  baseUrl: string;
}) {
  const { annualReport, baseUrl } = props;
  const date = new Date(annualReport.attributes.createdAt);
  return (
    <div
      key={"annual-report-item-" + annualReport.id}
      className="max-h-80 w-3/12 rounded-lg shadow-lg bg-white overflow-clip"
    >
      <img
        alt=""
        src={baseUrl + annualReport.attributes.image.data.attributes.url}
        className="h-3/6 w-full bg-cover"
      />
      <div className="flex flex-col justify-between px-3">
        <div className="py-3 flex flex-col gap-1 h-2/4">
          <a
            className="font-semibold text-lg line-clamp-1 hover:underline"
            href={`/annual-report/${annualReport.id}/${slugify(
              annualReport.attributes.title
            )}`}
            aria-label={annualReport.attributes.title}
          >
            {annualReport.attributes.title}
          </a>
          <p className="line-clamp-3">
            {annualReport.attributes.briefDescription}
          </p>
        </div>
        <p className="text-gray-400 ">{date.toDateString()}</p>
      </div>
    </div>
  );
}
