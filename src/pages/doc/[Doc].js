// pages/files/[fileId].js
import { Feather } from 'lucide-react';
import { useRouter } from 'next/router';
import Dashboard_editor from '../Dashbroad_editor';

export default function FilePage() {
  const router = useRouter();
  const {Doc} = router.query;

  return (
        <Dashboard_editor docId={Doc} />
    
  );
}
