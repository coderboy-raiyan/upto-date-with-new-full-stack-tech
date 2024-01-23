function page({ params }: { params: { slug: string } }) {
  return <div>Meal {params.slug}</div>;
}

export default page;
