import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookDetail } from "../redux/services/bookService";
import { getBookDetail } from "../redux/slices/bookSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const BookDetail = () => {
  const dispatch = useDispatch();
  const bookDetail = useSelector(getBookDetail);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBookDetail(id));
  }, [id]);

  if (bookDetail.status === "idle" || bookDetail.status === "loading") {
    return <Loading />;
  }
  return (
    <div className="flex items-center sm:items-start flex-col sm:flex-row px-5 sm:px-0 text-center sm:text-start">
      <div className="mr-0 sm:mr-20 sm:w-full md:w-1/2 lg:w-1/3  flex items-center justify-between flex-col">
        <img
          className="shadow-lg w-128"
          loading="lazy"
          alt="book"
          src={
            bookDetail.data.volumeInfo.imageLinks.medium ||
            bookDetail.data.volumeInfo.imageLinks.large ||
            bookDetail.data.volumeInfo.imageLinks.small ||
            bookDetail.data.volumeInfo.imageLinks.extraLarge ||
            bookDetail.data.volumeInfo.imageLinks.thumbnail
          }
        />
        <div className="flex items-center justify-evenly w-full">
          <a
            href={bookDetail.data.volumeInfo.previewLink}
            className="cursor-pointer  underline text-tRed"
            rel="noreferrer"
            target="_blank"
          >
            Preview
          </a>
          <a
            href={bookDetail.data.volumeInfo.infoLink}
            className="cursor-pointer  underline text-tRed"
            rel="noreferrer"
            target="_blank"
          >
            Info
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:w-full md:w-1/2 lg:w-2/3 mt-3">
        <p className="text-3xl lg:text-5xl text-tRed">
          {bookDetail.data.volumeInfo.title}
        </p>
        <p className="text-lg lg:text-2xl text-tRed my-3">
          {bookDetail.data.volumeInfo.subtitle
            ? bookDetail.data.volumeInfo.subtitle
            : ""}
        </p>
        <div
          className="code-block h-48 overflow-y-scroll"
          dangerouslySetInnerHTML={{
            __html: bookDetail.data.volumeInfo.description,
          }}
        />
        <ul className="mt-2 flex items-center self-center sm:self-start">
          <span className="text-tRed font-bold mr-2">Author(s) : </span>
          {bookDetail.data.volumeInfo.authors
            ? bookDetail.data.volumeInfo.authors.map((author, i) => (
                <li key={i}>{author}</li>
              ))
            : ""}
        </ul>
        <p className="mt-2">
          <span className="text-tRed font-bold mr-2">Page Count : </span>
          {bookDetail.data.volumeInfo.pageCount
            ? bookDetail.data.volumeInfo.pageCount
            : ""}
        </p>
        <p className="mt-2">
          <span className="text-tRed font-bold mr-2">Language : </span>
          {bookDetail.data.volumeInfo.language
            ? bookDetail.data.volumeInfo.language.toUpperCase()
            : ""}
        </p>
        <p className="mt-2">
          <span className="text-tRed font-bold mr-2">Published Date : </span>
          {bookDetail.data.volumeInfo.publishedDate
            ? bookDetail.data.volumeInfo.publishedDate
            : ""}
        </p>
        <p className="mt-2">
          <span className="text-tRed font-bold mr-2">Price : </span>
          {bookDetail.data.saleInfo.retailPrice
            ? bookDetail.data.saleInfo.retailPrice.amount
            : "unknown"}{" "}
          {bookDetail.data.saleInfo.retailPrice
            ? bookDetail.data.saleInfo.retailPrice.currencyCode
            : ""}
        </p>
      </div>
    </div>
  );
};

export default BookDetail;
