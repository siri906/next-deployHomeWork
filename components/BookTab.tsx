"use client";

import { BookGroup } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/booktab.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  bookInfoList: BookGroup[];
  id: string;
  rankNum: string;
}

const TabBook = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
`;
const TabBookItem = styled(motion.li)``;

export default function BookTab({ bookInfoList, id, rankNum }: Props) {
  return (
    <TabBook>
      <ul className="flex gap-3">
        {bookInfoList?.map((bookItem: BookGroup, idx: number) => {
          return (
            <TabBookItem key={idx} layoutId={rankNum} className={styles.tab_book_item}>
              <Link prefetch={true} href={`/list/${id}/${bookItem.rank}`} className={Number(rankNum) === bookItem.rank ? styles.on : ""}>
                <Image src={`${bookItem.book_image}`} priority={true} width={200} height={350} alt={bookItem.title} />
                <p className="text-center">{bookItem.rank} 위</p>
              </Link>
            </TabBookItem>
          );
        })}
      </ul>
    </TabBook>
  );
}
