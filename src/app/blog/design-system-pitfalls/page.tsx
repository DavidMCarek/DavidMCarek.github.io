import BlogPost from '@/components/blogPost';
import { ReactElement } from 'react';

export default function MyQualmsWithDesignSystems(): ReactElement {
  const dsGridExample = `
<main class="container">
  <div class="row">
    <div class="col-6 col-a">
      <p>First column content</p>
    </div>
    <div class="col-6 col-b">
      <p>Second column content</p>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-c">
      <p>Second row content</p>
    </div>
  </div>
</main>

<style>
  .container {
    padding: 0 16px;
  }

  .row {
    margin: 0 -16px;
    display: flex;
  }

  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding 16px;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
    padding 16px;
  }

  .col-a {
    background-color:rgba(1, 217, 255, 0.21);
  }

  .col-b {
    background-color:rgba(255, 1, 1, 0.21);
  }

  .col-c {
    background-color:rgba(86, 255, 1, 0.21);
  }
</style>
  `;

  const cssGridExample = `
<main class="container">
  <p class="col-a">First column content</p>
  <p class="col-b">Second column content</p>
  <p class="col-c">Second row content</p>
</main>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "a b"
      "c c";
  }

  .col-a {
    grid-area: a;
    background-color:rgba(1, 217, 255, 0.21);
  }

  .col-b {
    grid-area: b;
    background-color:rgba(255, 1, 1, 0.21);
  }

  .col-c {
    grid-area: c;
    background-color:rgba(86, 255, 1, 0.21);
  }

  .col-a,
  .col-b,
  .col-c {
    padding: 16px 0;
  }

  p {
    margin: 0 !important;
  }
</style
  `;

  const badSeparationExample = `
<button class="flex w-full justify-center rounded-md bg-indigo-600
  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500
  focus-visible:outline-2 focus-visible:outline-offset-2
  focus-visible:outline-indigo-600">
  Text
</button>
  `;

  const goodSeparationExample = `
// HTML
<button class="loginButton hover:bg-indigo-500
  focus-visible:outline-2 focus-visible:outline-offset-2
  focus-visible:outline-indigo-600">
  Text
</button>

// CSS module
.loginButton {
  @apply flex w-full justify-center rounded-md bg-indigo-600
    px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs;
}
  `;

  return (
    <BlogPost
      title="Common pitfalls of design systems"
      publishDate="Feb 6, 2025"
      updateDate="May 9, 2025"
    >
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
        the HTML tells the reader how to interpret the contents of the tag which
        is especially important for accessibility. So let{"'"}s take a look at a
        common example of design systems adding bloat where it need not be.
      </p>
      <h3>What not to do:</h3>
      <code className="u-display-block">{dsGridExample}</code>
      <iframe title="ds-grid-rendered" srcDoc={dsGridExample} width="100%" />
      <p>
        The markup in the sample above is very cluttered and blurring the
        separation of concerns that all applications should strive for. This
        pattern is using markup to achieve a particular style which is not the
        intended purpose of markup. Styling is meant to be handled by CSS or
        SASS or some other tool designed specifically for styling. So how might
        we refactor the markup and add appropriate styling to achieve the same
        goals? CSS grid has opened a world a possibilities allowing us to remove
        all that boilerplate markup.
      </p>
      <h3>New markup:</h3>
      <code className="u-display-block">{cssGridExample}</code>
      <iframe title="ds-grid-rendered" srcDoc={cssGridExample} width="100%" />
      <p>
        The new markup is cleaner and more semantically structured all with
        hardly any CSS.
      </p>
      <h2>Separation of concerns</h2>
      <p>
        Another problematic usage of design systems is the abuse of utility
        classes to apply all styling. Occasional, one off usage of utility
        classes can make sense at times. However, adding tons of these utitilty
        classes to a single element creates {'"'}class soup{'"'} which really is
        no better than inline style attributes. Especially becuase utitlity
        classes usually have <code>!important</code> in their styling which then
        takes precedence over all other styles applied. So how does this violate
        separation of concerns? As mentioned earlier HTML is for defining
        structure not style.
      </p>
      <p>
        It only took me about five seconds of looking through Tailwind samples
        to find this beauty of a button.
      </p>
      <h3>Tailwind nightmare example:</h3>
      <code className="u-display-block">{badSeparationExample}</code>
      <p>
        So how might we better deal with this situation if we still want the
        functionality of Tailwind without the bloated markup? My preferred
        option would be to use a combination of SCSS modules with mixins and
        variables for all the styling that would need to be applied to the
        element. With SCSS modules {'(or CSS modules)'} we can give descriptive
        class names and abstract styling away from the markup all while
        isolating where our styles get applied to. In the case of Tailwind,{' '}
        <code>@apply</code> can be used to group those utility classes under a
        single class name. Now this does come with tradeoffs in Tailwind since
        you would be losing out on tree shaking since apply basically just
        injects the CSS where its applied but when paired with CSS modules tree
        shaking is a bit less important since you will only be loading styles
        for components that are being used on the page anyway. The other
        limitation of apply is that it can{"'"}t handle responsive and state
        variants like <code>md:</code> and <code>hover:</code>.
      </p>
      <h3>Improved Tailwind example:</h3>
      <code className="u-display-block">{goodSeparationExample}</code>
      <p>
        The example above is the easiest way to clean things up quickly although
        I do encourage just writing the CSS for the simple state variants where
        possible and just leveraging variables to handle colors to keep both the
        markup and styles clean and easy to read.
      </p>
      <h2>Ownership</h2>
      <p>
        Many developers like to over leverage design systems in the name of not
        directly owning the styles associated with the codebase. For example, if
        the design system decides to update styling for an accordion class then
        all the accordions across the site get updated. This is the ideal use
        case for a design system because many styles are being applied in the
        format of a single component.
      </p>
      <p>
        So when does overleveraging begin? When simple utility classes in charge
        of one single style get applied in bulk to many elements inside a given
        component. The design system will never need to update the styles for a
        utility class like <code>u-display-flex</code> that applies{' '}
        <code>display: flex;</code> to an element. Therefore, claims of
        ownership don{"'"}t really apply since a class whose value never changes
        has no benefit over the actual style behind it.
      </p>
      <p>
        Additionally, there are often things across your site that you wouldn
        {"'"}t want the design system to have ownership over. Many developers
        praise the grid systems that are provided in design systems but if we
        think the design system could change how that grid system functions or
        styling behind it what sort of issues would crop up? Let{"'"}s say the
        design system adjusts the default spacer for the grid from 8px to 16px.
        For many sites that sort of change would drastically change the layout
        of all the pages on the site. So when using a design system we need to
        ask ourselves if the styles being provided are worth the risk of them
        changing, once again proving that ownership is a double edged sword.
      </p>
      <p>
        In those small situations where you only need one or two classes to
        achieve the styling for an element it{"'"}s perfectly reasonable to use
        utility classes. A little nuance goes a long way when it comes to using
        utility classes in a clear and concise manner. Other times when utility
        classes make sense to use is when the styling starts to get more complex
        than a one liner of CSS. Think styles with breakpoints as a decent
        example of this.
      </p>
      <h2>Summary</h2>
      <p>
        Keeping markup clean can be a challenge when incorporating design
        systems but there{"'"}s many opportunities we have to improve how we use
        them. End users, other developers, and your future self will appreciate
        any effort made to keep your frontend looking pristine and maintainable.
      </p>
    </BlogPost>
  );
}
