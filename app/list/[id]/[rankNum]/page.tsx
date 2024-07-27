import BookList from "@/components/BookList";
import { getBookList } from "@/service/api";
import { BookGroup, BookListInfo } from "@/types/types";

export async function generateMetadata({ params: { rankNum = "1", id } }: { params: { rankNum: string; id: string } }) {
  const bookList: BookListInfo = await getBookList(id);
  const bookInfoList: BookGroup[] = bookList.results.books;
  const viewBookInfo = bookInfoList[Number(rankNum) - 1];
  return {
    title: viewBookInfo.title,
  };
}

export default async function Detail({ params: { rankNum = "1", id } }: { params: { id: string; rankNum: string } }) {
  const bookList: BookListInfo = await getBookList(id);
  const bookInfoList: BookGroup[] = bookList.results.books;
  const viewBookInfo = bookInfoList[Number(rankNum) - 1] ?? [];
  return (
    <>
      <BookList id={id} bookInfoList={bookInfoList} viewBookInfo={viewBookInfo} rankNum={rankNum} />
    </>
  );
}
