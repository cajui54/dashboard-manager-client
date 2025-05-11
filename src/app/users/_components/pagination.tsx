import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react';

const PaginationComponent = () => {
  return (
    <div className="mb-10 mt-5 flex h-10 w-[960px] items-center justify-between font-sans">
      <div className="h-5 w-[91px] text-sm font-normal tracking-tighter text-zinc-500">
        <span>5 de 294</span>
      </div>

      <div className="flex h-10 w-[372px] items-start gap-1">
        <Button
          variant={'ghost'}
          className="flex h-10 w-[98px] items-center gap-x-1 rounded-md bg-transparent opacity-50 transition hover:opacity-100"
          title="Previous page"
        >
          <ChevronLeft />
          <span>Anterior</span>
        </Button>

        <Button
          variant={'link'}
          className="h-10 w-10 rounded-md border border-zinc-200 bg-transparent bg-white text-sm font-medium text-zinc-900"
        >
          1
        </Button>

        <Button
          variant={'link'}
          className="h-10 w-10 rounded-md bg-transparent bg-white text-sm font-medium text-zinc-900"
        >
          2
        </Button>

        <Button
          variant={'link'}
          className="h-10 w-10 rounded-md bg-transparent bg-white text-sm font-medium text-zinc-900"
        >
          <Ellipsis />
        </Button>

        <Button
          variant={'ghost'}
          className="flex h-10 w-[98px] items-center gap-x-1 space-x-1 rounded-md bg-transparent opacity-50 transition hover:opacity-100"
          title="Previous page"
        >
          <span>Próxima</span>
          <ChevronRight />
        </Button>
      </div>

      <div className="flex h-10 w-[179px] items-center gap-x-2 text-sm font-normal tracking-tighter">
        <span className="text-zinc-500">Itens por página</span>
        <select className="flex h-10 w-[70px] items-center justify-between space-x-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900">
          <option>10</option>
          <option>9</option>
          <option>8</option>
          <option>7</option>
        </select>
      </div>
    </div>
  );
};

export default PaginationComponent;
