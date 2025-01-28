import { formatDate } from "@/lib/utils";

import AuthorChip from "@/components/common/AuthorChip";
import Tag from "@/components/common/Tag";
import SectionTitle from "@/components/common/SectionTitle";
import styles from "./BlogPostHeader.module.css";
import Share from "../common/Share";

export default function BlogPostHeader({
  id,
  slug,
  imageUrl,
  tag,
  date,
  title,
  description,
  authors,
}) {
  

  return (
    <div className={styles["blog-post-header"]}>
      <div className={styles["left"]}>
        <SectionTitle title={"Blog"} />
        <div className={styles["left-bottom"]}>
          <div className={styles["tag-date-wrapper"]}>
            <Tag value={tag} />
            <span className={styles["date"]}>{formatDate(date) ?? "--"}</span>
          </div>
          <h4 className={styles["title"]}>{title ?? "--"}</h4>
          <p className={styles["description"]}>{description ?? "--"}</p>
          <div className={styles["authors-wrapper"]}>
            {authors?.map((item, index) => (
              <AuthorChip
                key={index}
                imageUrl={item?.imageUrl}
                name={item?.name}
              />
            ))}
          </div>
          <div className={styles["share"]}>
            <span className={styles["share-article"]}>Share Article</span>
            <div className={styles["share-icons-wrapper"]}>
              {/* Copy Link */}
              <Share title={title}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["image-wrapper"]}>
        <div
          className={styles["image"]}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
    </div>
  );
}
