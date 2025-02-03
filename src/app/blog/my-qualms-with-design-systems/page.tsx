import Card from '@/components/card';

export default function MyQualmsWithDesignSystems() {
  return (
    <main>
      <Card as="article">
        <h1>My qualms with design systems</h1>
        <p>
          I would like to start into this saying that design systems can be
          incredibly helpful. Many can have standardized implementations of
          accessible web components that help drive interactive user interfaces
          and streamline development around them. That said, they can have some
          negative impacts to the quality of the codebase that uses them.
        </p>
        <h2>Well written HTML</h2>
        <p>
          In an ideal world HTML would be perfectly semantic with each element
          having a well defined role. This is important because the structure of
          the HTML tells the reader how to interpret the contents of the tag
          which is especially important for accessibility. So let{"'"}s take a
          look at a common example of design systems adding bloat where it need
          not be.
        </p>
        <p></p>
      </Card>
    </main>
  );
}
