import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const location = useLocation();
  const history = useHistory();

  const queryPrams = new URLSearchParams(location.search);

  const isSortingAscending = queryPrams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const sortQuotesHandler = () => {
    history.push({
      path: `${location.pathname}`,
      search: `?sort=${isSortingAscending ? `dsc` : `asc`}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortQuotesHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
