
import React from 'react';

// Icons
const MicrophoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
);

const MusicNoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3" />
    </svg>
);

const SoundWaveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728m2.828 9.9a5 5 0 010-7.072" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const guideData = [
  {
    icon: <MicrophoneIcon />,
    title: 'Giọng đọc',
    subtitle: 'Narration',
    items: [
      {
        icon: <CheckCircleIcon />,
        title: 'Giọng (Voice)',
        description: 'Nữ trưởng thành, ấm áp, âu yếm.',
      },
      {
        icon: <CheckCircleIcon />,
        title: 'Tông giọng (Tone)',
        description: '"Giọng của mẹ" (Motherly tone). Giống như đang đọc truyện cho con ngay bên cạnh giường ngủ.',
      },
      {
        icon: <CheckCircleIcon />,
        title: 'Cường độ (Volume)',
        description: 'Thấp đến trung bình (Mezzo-piano). Giọng nói phải luôn đồng đều, không bao giờ la lớn hay lên giọng đột ngột.',
      },
      {
        icon: <CheckCircleIcon />,
        title: 'Tốc độ (Pacing)',
        description: 'Chậm, rõ ràng, và có chủ đích. Mỗi từ phải được phát âm trọn vẹn.',
      },
      {
        icon: <CheckCircleIcon />,
        title: 'Nhịp điệu (Rhythm)',
        description: 'Nghỉ 1 giây sau khi câu thoại kết thúc và trước khi hiệu ứng lật trang bắt đầu. Điều này tạo ra một nhịp điệu thư giãn.',
      },
      {
        icon: <CheckCircleIcon />,
        title: 'Kỹ thuật thu âm (Recording Technique)',
        description: 'Thu âm gần (close-mic) để tạo cảm giác thân mật, thì thầm. Dùng màng lọc âm (pop filter) để tránh tiếng thở mạnh.',
      },
    ],
  },
  {
    icon: <MusicNoteIcon />,
    title: 'Nhạc nền',
    subtitle: 'Music',
    items: [
      {
        icon: <CheckCircleIcon />,
        title: 'Thể loại (Genre)',
        description: 'Hòa tấu, ru ngủ, thần tiên (Lullaby, Magical Orchestral).',
      },
      {
        icon: <CheckCircleIcon />,
        title: 'Nhạc cụ chính (Instruments)',
        description: 'Harp (đàn hạc), Celesta (chuông), và đàn dây (strings) nhẹ nhàng.',
      },
      {
        icon: <CheckCircleIcon />,
        title: 'Cường độ (Volume)',
        description: 'Luôn luôn thấp, nằm dưới giọng đọc và không bao giờ cạnh tranh. Giữ ở một mức cường độ ổn định.',
      },
      {
        icon: <CheckCircleIcon />,
        title: 'Quy tắc (Rule)',
        description: 'Không có các đoạn cao trào (crescendo) hay thay đổi âm lượng đột ngột. Giai điệu phải đơn giản, lặp lại nhẹ nhàng.',
      },
    ],
  },
  {
    icon: <SoundWaveIcon />,
    title: 'Hiệu ứng Âm thanh',
    subtitle: 'SFX',
    items: [
      {
        icon: <CheckCircleIcon />,
        title: 'Lật trang (Page Turn)',
        description: 'Sử dụng CHỈ MỘT file âm thanh "lật trang" (soft whoosh) duy nhất. Cường độ thấp hơn giọng nói.',
      },
      {
        icon: <CheckCircleIcon />,
        title: 'Lấp lánh (Sparkles/Chimes)',
        description: 'Một âm thanh "ting" hoặc "sparkle" trong trẻo, nhẹ nhàng. Kích hoạt cùng hiệu ứng "Text glow". Cường độ rất tinh tế.',
      },
      {
        icon: <CheckCircleIcon />,
        title: 'Môi trường (Ambience)',
        description: 'Loại bỏ "tiếng trẻ em cười" trừ khi được hòa trộn vào nhạc nền ở mức cực kỳ thấp để tránh làm phân tâm.',
      },
    ],
  },
];
   