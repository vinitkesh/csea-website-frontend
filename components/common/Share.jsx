import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Share = ({title}) => {
    const [articleUrl, setArticleUrl] = useState("");

  // Generate the URL on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setArticleUrl(`${window.location.origin}${window.location.pathname}`);
    }
  }, []);
  return (
    <>
      <button
        onClick={() => {
            navigator.clipboard.writeText(articleUrl);
            alert("URL copied to clipboard!");
        }}
        title="Copy Link"
        >
        <img src="/svgs/link.svg" alt="link" />
        </button>

        {/* Email */}
        <Link
        href={`mailto:?subject=${encodeURIComponent(
            `Check out this article: ${title}`
        )}&body=${encodeURIComponent(articleUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Share via email"
        >
        <img src="/svgs/email.svg" alt="email" />
        </Link>

        {/* Twitter */}
        <Link
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                
        )}&text=${encodeURIComponent(`Check out this article on ${title} by CSEA NIT Calicut: ${articleUrl}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Share on Twitter"
        >
        <img src="/svgs/twitter.svg" alt="twitter" />
        </Link>

        {/* LinkedIn */}
        <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            articleUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Share on LinkedIn"
        >
        <img src="/svgs/linkedin.svg" alt="linkedin" />
        </Link>
    </>
  )
}

export default Share
