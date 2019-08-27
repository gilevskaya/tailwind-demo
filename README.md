Tailwind demo with responsive design on top of the basic create-react-app.

### Setup
```
yarn
yarn start
```

### Why this is great

* Tailwind has no opinion on how things should look like (unlike other frameworks), it's lightweight and just generate a bunch of atomic classses for us

* One config file `tailwind.js` that defines all of the design constants (colors, font-sizes, standard paddings etc.); which enforces developers to only use those, hence design consistency

* Atomic classes cover the most of the css needs, hence developers barely ever need to write css / create css files (most css work is setting up one config file)

* Code is very descriptive / transperent. Vs. css approach you have to jump to css file to understand what's going on. Or vs. wrapper react components approach - the html+css logic gets hidden behind them

* Compared to writing your own atomic classes, this solution **HAS DOCUMENTATION** and support, and also does the job for us, which is nice too; we can strap from all the things we don't need

* Makes deveopment fast because all building blocks are already there; plus easy responsive design support

* This can live in parallel with exsisting scss code. Potentially does everything scss does, so can be used instead

* Framework has solid community adoption

* ...And I can't think of a cleaner way to do consistent typography for custom styles beyond `h1`, ... (like `p3`, or `cta`), that would also support some minor overriding like aligning text left instead of center or some margins, or color

### Concerns 

* By default generates large css file (with all the atomic classes), so we need to make sure to keep only things we use.

* Compile tailwind styles from several css files is not straight forward – whenever we'd want to use variables or `@apply` syntax in css it would compile to include all atomic classes again (maybe there is way around this + technically we'd probably just use those atomic classes in the JSX code anyway)

* Has some new syntax - shortcuts for css, so there is a learning curve (but the syntax is very limited)

* Has a compile step

### Bottom line

All it does is generates some atomic classes based on a config. I think the question is if we like the atomic classes approach overall (if we do this seems like a way to go). And we don't – how do we build a reusable design building blocks, that would enforce design consistency and speed up the development process.
