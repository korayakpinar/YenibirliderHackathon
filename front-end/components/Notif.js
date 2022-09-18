function Notif() {
  return (
    <ul class="rounded-lg w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 dark:bg-slate-900 dark:border-white dark:text-white">
      <li class="content-center py-2 h-[70px] px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-white">
        <p className="font-medium">Koray Akpınar &#9679; 10 Eylül 2022</p>
        <p className="text-lg">Blockchain ve gelecek adlı yazına upvote verdi.</p>
      </li>
      <li class="py-2 px-4 w-full border-b h-[70px] border-white dark:border-white">
        <p className="font-medium">Zedit &#9679; 10 Eylül 2022</p>
        <p className="text-lg">Blockchaın ve gelecek adlı yazına yorum yaptı.</p>
      </li>
      <li class="py-2 px-4 w-full border-b h-[70px] border-gray-200 dark:border-white">
        <p className="font-medium">Koray Akpınar &#9679; 9 Eylül 2022</p>
        <p className="text-lg">Gündoğumu rozetin için teklif gönderdi.</p>
      </li>
      <li class="py-2 px-4  w-full rounded-b-lg h-[70px] dark:border-white">
        <p className="font-medium">Koray Akpınar &#9679; 9 Eylül 2022</p>
        <p className="text-lg">
          Yazından &quot;NFT 101&quot; rozetini düşürdü.
        </p>
      </li>
    </ul>
  );
}

export default Notif;
