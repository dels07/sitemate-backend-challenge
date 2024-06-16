import { useEffect } from 'react';

import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

export function FormInput({
  issue,
  createIssue,
  updateIssue,
  payloadData,
  setPayloadData,
  openForm,
  setOpenForm
}) {
  useEffect(() => {
    if (issue) {
      setPayloadData({...payloadData, ...issue});
    } else {
      setPayloadData(null);
    }
  }, [issue]);

  const handleSubmit = async () => {
    if (!issue) {
      await createIssue(payloadData);
    } else {
      await updateIssue(issue.id, {...issue, ...payloadData});
    }

    setPayloadData(null);
    setOpenForm(false);
  }

  return (
    <Dialog open={openForm} onOpenChange={setOpenForm}>
      <DialogContent className="sm:max-w-[425px] top-64">
        <DialogHeader>
          <DialogTitle>{!issue ? 'Add' : 'Edit'} Issue</DialogTitle>
          <DialogDescription>
            Make changes to your issue here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Name
            </Label>
            <Input
              id="title"
              defaultValue={issue?.title}
              onChange={(e) => setPayloadData({...payloadData, title: e.target.value})}
              required={true}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              defaultValue={issue?.description}
              onChange={(e) => setPayloadData({...payloadData, description: e.target.value})}
              required={true}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            disabled={!payloadData?.title?.length || !payloadData?.description?.length}
            onClick={handleSubmit}
          >Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
