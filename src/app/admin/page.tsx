import { Image } from '@/components/image';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ALL_POSTS } from '@/lib/data';

export default function AdminPage() {
  return (
    <div className="p-10">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Cover</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Summary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ALL_POSTS.map((post) => (
            <TableRow key={post.slug}>
              <TableCell>
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="h-[80px] w-[80px]"
                />
              </TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.summary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
