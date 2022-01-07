import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";
import { useEffect } from "react";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === `completed`) {
      history.push("/all-quotes");
    }
  }, [status, history]);

  const onAddQuoteHandler = (data) => {
    sendRequest(data);
  };

  return (
    <QuoteForm
      isLoading={status === `pending`}
      onAddQuote={onAddQuoteHandler}
    ></QuoteForm>
  );
};

export default NewQuote;
