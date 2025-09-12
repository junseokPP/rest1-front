"use client";

export default function Home() {
  const posts = [
    { id: 1, title: "글 1" },
    { id: 2, title: "글 2" },
    { id: 3, title: "글 3" },
    { id: 4, title: "글 4" },
    { id: 5, title: "글 5" },
    { id: 6, title: "글 6" },
    { id: 7, title: "글 7" },
    { id: 8, title: "글 8" },
    { id: 9, title: "글 9" },
    { id: 10, title: "글 10" },
  ];

  return (
    <div className="flex flex-col gap-9">
      <h1>글 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} : {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
