import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card';
import { Button } from './ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from './ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { MoreHorizontal, PenSquare, Trash2 } from 'lucide-react';
import { type IssueType } from '../App';

export function DataTable({
  issues,
  getIssue,
  setIssueDetail,
  setDeleteId,
  setOpenForm,
  setOpenDelete
}) {
  return (
    <Card className="w-[960px] mt-10">
      <CardHeader>
        <div className='flex'>
          <div className='flex-1'>
            <CardTitle>Issue Management</CardTitle>
            <CardDescription>Create and manage your issue.</CardDescription>
          </div>
          <div className='flex-none w-24'>
            <Button onClick={() => {
              setIssueDetail(null);
              setOpenForm(true);
            }}>Add Issue</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[240px]'>Title</TableHead>
              <TableHead className='w-[700px]'>Description</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues?.map((issue: IssueType) => (
              <TableRow key={issue.id}>
                <TableCell>{issue.title}</TableCell>
                <TableCell>{issue.description}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={async () => {
                        await getIssue(issue.id);
                        setOpenForm(true);
                      }}>
                        <PenSquare className="h-4 w-4 mr-1"></PenSquare>
                        Edit issue
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => {
                        setDeleteId(issue.id);
                        setOpenDelete(true);
                      }}>
                        <Trash2 className="h-4 w-4 mr-1"></Trash2>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}