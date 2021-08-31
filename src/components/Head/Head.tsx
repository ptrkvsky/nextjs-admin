import NextHead from 'next/head';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = ``, description = `` }: HeadProps = {}) => (
  <NextHead>
    <title>{title ? `${title} | Kovsky's Backend` : undefined}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);
