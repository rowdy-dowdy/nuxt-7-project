const temp = [
  {
    title: 'Facts About Business That Will Help You Success',
    slug: '1',
    description: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…',
    image: 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/drop-the-label-movement-608463-unsplash-325x233.jpg',
    category: 'Fashion',
    author: 'Viet Hung',
    created_at: 1660842000000
  },
  {
    title: '5 Easy Ways You Can Turn Future Into Success',
    slug: '1',
    description: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…',
    image: 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/grant-ritchie-1154815-unsplash-325x233.jpg',
    category: 'Fashion',
    author: 'Viet Hung',
    created_at: 1660842000000
  },
  {
    title: 'Our Light Is About To Stop Being Relevant',
    slug: '1',
    description: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…',
    image: 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/joey-nicotra-HiqgOQaksAQ-unsplash-e1660634166643-580x485.jpg',
    category: 'Fashion',
    author: 'Viet Hung',
    created_at: 1660842000000
  },
  {
    title: 'Feel Like A Pro With The Help Of These 7 Tips',
    slug: '1',
    description: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…',
    image: 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/jacob-postuma-395327-unsplash-580x485.jpg',
    category: 'Fashion',
    author: 'Viet Hung',
    created_at: 1660842000000
  },
  {
    title: '60 Things To Immediately Do About Building',
    slug: '1',
    description: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…',
    image: 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/evstratov_-U7stODj21DU-unsplash-330x250.jpg',
    category: 'Fashion',
    author: 'Viet Hung',
    created_at: 1660842000000
  },
  {
    title: 'Master The Art Of Nature With These 7 Tips',
    slug: '1',
    description: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…',
    image: 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/loren-gu-146832-unsplash-330x250.jpg',
    category: 'Fashion',
    author: 'Viet Hung',
    created_at: 1660842000000
  },
  {
    title: 'Your Light Is About To Stop Being Relevant',
    slug: '1',
    description: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…',
    image: 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/david-van-dijk-255503-unsplash-330x250.jpg',
    category: 'Fashion',
    author: 'Viet Hung',
    created_at: 1660842000000
  },
  {
    title: 'What Can You Do About Fashion Right Now',
    slug: '1',
    description: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…',
    image: 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/thought-catalog-640705-unsplash-550x367.jpg',
    category: 'Fashion',
    author: 'Viet Hung',
    created_at: 1660842000000
  },
  {
    title: 'Easy Ways To Learn Everything About Construction',
    slug: '1',
    description: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,…',
    image: 'https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/jason-briscoe-105344-unsplash-325x233.jpg',
    category: 'Fashion',
    author: 'Viet Hung',
    created_at: 1660842000000
  },
 
]


export default defineEventHandler((event) => {
  // const query = useQuery(event)
  const data = temp.map((v,i) => {
    return {
      id: i,
      ...v
    }
  }).sort((a, b) => 0.5 - Math.random());
  
  return data
})
