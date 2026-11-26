(function(){
  const tr=value=>value&&value.includes('|')?translated(value):value;
  const esc=value=>escapeText(String(value??''));
  const officialCurriculum='https://www.cfainstitute.org/programs/cfa-program/curriculum';
  const officialCbok='https://www.cfainstitute.org/programs/cfa-program/candidate-resources/cbok';
  const ethicsSource='https://www.cfainstitute.org/standards/professionals/code-ethics-standards';

  const fullUnit=(id,title,lead,points,caseTitle,caseFacts,caseQuestion,solution,extra={})=>({
    id,title,lead,points,caseTitle,caseFacts,caseQuestion,solution,...extra
  });
  const outline=(id,title)=>({id,title});
  const planned=(id,group,code,title,description,levels,batch,unitTitles,source=officialCbok)=>({
    id,group,code,title,description,levels,batch,status:'planned',source,
    units:unitTitles.map((title,index)=>outline('u'+(index+1),title))
  });

  const courses=[
    {
      id:'business-foundations',group:'foundation',code:'FND 01',status:'ready',batch:1,levels:['I','II','III'],
      title:'Hiểu về doanh nghiệp|Understanding a Business',
      description:'Hiểu cách doanh nghiệp tạo giá trị, kiếm tiền, tái đầu tư và chuyển lợi thế cạnh tranh thành dòng tiền.|Understand how a business creates value, earns money, reinvests and converts competitive advantage into cash flow.',
      source:officialCbok,
      units:[
        fullUnit('business-model','Mô hình kinh doanh và chuỗi giá trị|Business model and value chain',
          'Một mô hình kinh doanh tốt trả lời được bốn câu hỏi: phục vụ ai, giải quyết vấn đề gì, cung cấp giá trị bằng hoạt động nào và giữ lại bao nhiêu giá trị dưới dạng lợi nhuận hoặc dòng tiền.|A useful business model answers four questions: whom it serves, what problem it solves, which activities deliver the value and how much value remains as profit or cash.',
          ['Khách hàng và nhu cầu thực sự|Customer and real need','Sản phẩm, kênh bán và quyền định giá|Product, distribution and pricing power','Hoạt động cốt lõi, đối tác và điểm nghẽn|Core activities, partners and bottlenecks','Doanh thu, chi phí và nhu cầu tái đầu tư|Revenue, cost and reinvestment needs'],
          'Ứng dụng giao đồ ăn tăng trưởng nhanh|A fast-growing delivery platform',
          'Nền tảng thu 18 trên mỗi đơn hàng 120. Chi phí tài xế và xử lý là 15, khuyến mại bình quân 5. Số đơn tăng 40% nhưng khuyến mại chưa giảm.|The platform collects 18 on each order of 120. Driver and processing costs are 15 and average promotion is 5. Orders grow 40% but promotions have not fallen.',
          'Tăng trưởng đơn hàng có đồng nghĩa mô hình đã tạo giá trị không?|Does order growth mean the model already creates value?',
          'Chưa. Doanh thu thuần 18 không đủ bù 20 chi phí biến đổi nên mỗi đơn làm giảm 2 trước chi phí cố định. Trước khi định giá tăng trưởng, cần kiểm tra liệu mật độ đơn hàng có thực sự giảm chi phí giao hàng hoặc cho phép giảm khuyến mại mà không làm khách rời đi.|Not yet. Net revenue of 18 does not cover variable costs of 20, so every order loses 2 before fixed costs. Before valuing growth, test whether order density can lower delivery cost or promotions can fall without losing customers.',
          {source:officialCbok}),
        fullUnit('unit-economics','Động lực doanh thu và unit economics|Revenue drivers and unit economics',
          'Tách doanh thu thành các biến có thể kiểm tra: số khách, tần suất mua, số lượng, giá và tỷ lệ giữ chân. Sau đó so lợi nhuận gộp vòng đời khách hàng với chi phí thu hút để biết tăng trưởng có tự tài trợ được không.|Decompose revenue into testable drivers: customers, purchase frequency, volume, price and retention. Then compare customer lifetime gross profit with acquisition cost to see whether growth can fund itself.',
          ['Tăng giá khác với tăng sản lượng|Price growth differs from volume growth','Biên gộp phải tính sau chi phí trực tiếp|Gross margin follows direct costs','Churn quyết định vòng đời khách hàng|Churn determines customer life','CAC phải gồm toàn bộ chi phí thu hút|CAC includes all acquisition spend'],
          'Một sản phẩm SaaS có tăng trưởng nhưng hoàn vốn chậm|A growing SaaS product with slow payback',
          'Phí thuê bao 50 mỗi tháng, biên gộp 80%, churn tháng 4% và CAC là 600. Giả sử churn ổn định và không chiết khấu.|Monthly subscription is 50, gross margin 80%, monthly churn 4% and CAC is 600. Assume stable churn and no discounting.',
          'Tính LTV, tỷ lệ LTV trên CAC và thời gian hoàn vốn đơn giản.|Estimate LTV, LTV-to-CAC and simple payback.',
          'Lợi nhuận gộp tháng là 40. Vòng đời kỳ vọng đơn giản là 25 tháng, nên LTV khoảng 1.000. LTV trên CAC là 1,67 lần và hoàn vốn cần 15 tháng. Chỉ số chưa chứng minh chất lượng nếu churn tăng khi công ty giảm khuyến mại hoặc CAC không gồm lương đội bán hàng.|Monthly gross profit is 40. A simple expected life is 25 months, giving LTV near 1,000. LTV-to-CAC is 1.67 times and payback is 15 months. These figures are not robust if churn rises when promotions stop or CAC excludes sales salaries.',
          {formula:'LTV=frac(ARPU×GM;churn)',symbols:'ARPU là doanh thu tháng trên khách; GM là biên gộp; churn là tỷ lệ khách rời mỗi tháng.|ARPU is monthly revenue per customer; GM is gross margin; churn is monthly customer loss.',source:officialCbok}),
        fullUnit('industry-moat','Cấu trúc ngành và lợi thế cạnh tranh|Industry structure and competitive advantage',
          'Lợi thế cạnh tranh chỉ có ý nghĩa đầu tư khi nó bảo vệ lợi nhuận trước khách hàng, nhà cung cấp, đối thủ hiện tại, sản phẩm thay thế và người mới gia nhập. Hãy tìm bằng chứng trong giá, tỷ lệ giữ chân, chi phí chuyển đổi và lợi nhuận trên vốn.|Competitive advantage matters when it protects economics from customers, suppliers, current rivals, substitutes and entrants. Look for evidence in pricing, retention, switching costs and returns on capital.',
          ['Rào cản gia nhập phải khó sao chép|Entry barriers must be hard to copy','Thị phần lớn chưa chắc có quyền định giá|High share does not ensure pricing power','Lợi thế mạng lưới cần tăng giá trị cho người dùng|Networks must improve user value','ROIC cao chỉ bền khi tái đầu tư được|High ROIC matters when reinvestment remains available'],
          'Hai doanh nghiệp cùng tăng doanh thu 12%|Two firms both grow revenue 12%',
          'Công ty A tăng nhờ giảm giá 15%, churn tăng và biên gộp giảm. Công ty B tăng giá 5%, vẫn giữ 96% khách và biên gộp tăng.|Company A grows after cutting price 15%, while churn rises and gross margin falls. Company B raises price 5%, retains 96% of customers and expands gross margin.',
          'Doanh nghiệp nào có bằng chứng lợi thế cạnh tranh mạnh hơn?|Which company shows stronger evidence of competitive advantage?',
          'Công ty B có bằng chứng tốt hơn vì tăng giá mà vẫn giữ khách và cải thiện biên. Tuy nhiên cần kiểm tra chu kỳ hợp đồng, mức độ tập trung khách hàng và phản ứng của đối thủ. Công ty A có thể đang mua tăng trưởng bằng biên lợi nhuận.|Company B has stronger evidence because it raised price while retaining customers and improving margin. Still test contract timing, customer concentration and competitive response. Company A may be purchasing growth with margin.',
          {videoId:'okczJ-XyJnQ',videoTitle:'Corporate governance and durable business quality — Corporate Finance Institute',source:officialCbok}),
        fullUnit('operating-leverage','Đòn bẩy hoạt động và điểm hòa vốn|Operating leverage and break-even',
          'Chi phí cố định cao làm lợi nhuận tăng nhanh sau khi vượt hòa vốn nhưng cũng làm thua lỗ mở rộng khi doanh thu giảm. Tách chi phí cố định, biến đổi và bán biến đổi trước khi dự báo biên lợi nhuận.|High fixed costs accelerate profit after break-even but also magnify losses when revenue falls. Separate fixed, variable and mixed costs before forecasting margins.',
          ['Contribution margin trả cho chi phí cố định trước|Contribution margin covers fixed cost first','Công suất nhàn rỗi làm thay đổi chi phí đơn vị|Idle capacity changes unit cost','Đòn bẩy tài chính khác đòn bẩy hoạt động|Financial leverage differs from operating leverage','Stress test sản lượng, giá và chi phí riêng biệt|Stress volume, price and cost separately'],
          'Nhà máy cân nhắc nhận hợp đồng lớn|A factory considers a large contract',
          'Chi phí cố định năm là 1,2 triệu. Giá bán 100 và chi phí biến đổi 40 mỗi đơn vị. Công suất tối đa 30.000 đơn vị.|Annual fixed cost is 1.2 million. Price is 100 and variable cost 40 per unit. Maximum capacity is 30,000 units.',
          'Điểm hòa vốn là bao nhiêu và biên an toàn ở sản lượng 24.000?|What is break-even and the margin of safety at 24,000 units?',
          'Contribution margin là 60 mỗi đơn vị. Hòa vốn tại 20.000 đơn vị. Ở 24.000 đơn vị, biên an toàn là 4.000 đơn vị hoặc khoảng 16,7% sản lượng dự kiến. Cần kiểm tra hợp đồng có đòi đầu tư thêm công suất hoặc làm tăng chi phí bảo hành không.|Contribution margin is 60 per unit. Break-even is 20,000 units. At 24,000 units, the margin of safety is 4,000 units or about 16.7% of expected volume. Check whether the contract requires new capacity or raises warranty cost.',
          {formula:'Q*=frac(F;P−V)',symbols:'Q* là sản lượng hòa vốn; F là chi phí cố định; P là giá bán đơn vị; V là chi phí biến đổi đơn vị.|Q* is break-even volume; F is fixed cost; P is unit price; V is unit variable cost.',source:officialCbok}),
        fullUnit('business-memo','Từ phân tích doanh nghiệp đến bản ghi nhớ đầu tư|From business analysis to an investment memo',
          'Một bản ghi nhớ tốt phân biệt dữ kiện, giả định và kết luận. Nó giải thích động lực doanh thu, lợi nhuận, dòng tiền, nhu cầu vốn, rủi ro phá vỡ luận điểm và điều kiện phải xem xét lại.|A sound memo separates facts, assumptions and conclusions. It explains revenue drivers, profit, cash, capital needs, thesis breakers and review triggers.',
          ['Luận điểm phải kiểm chứng được|The thesis must be testable','Base, bull và bear dùng giả định nhất quán|Base, bull and bear use consistent assumptions','Rủi ro phải gắn với chỉ báo theo dõi|Risks need monitoring indicators','Giá trị tốt không đồng nghĩa cổ phiếu tốt ở mọi giá|A good business is not a good stock at every price'],
          'Nhà sản xuất tăng lợi nhuận nhưng giảm tiền mặt|A manufacturer grows profit while cash falls',
          'Doanh thu 100, EBIT 15, tiền từ hoạt động 5, capex 12. Phải thu và tồn kho cùng tăng nhanh hơn doanh thu. Ban điều hành gọi đây là đầu tư cho tăng trưởng.|Revenue is 100, EBIT 15, operating cash flow 5 and capex 12. Receivables and inventory both grow faster than sales. Management calls this investment for growth.',
          'Kết luận sơ bộ nên là mua, tránh hay tiếp tục điều tra?|Should the preliminary decision be buy, avoid or investigate further?',
          'Tiếp tục điều tra. Lợi nhuận chưa chuyển thành tiền và dòng tiền tự do đang âm 7. Cần kiểm tra tuổi nợ, đơn hàng đã xác nhận, hàng tồn chậm luân chuyển, điều khoản nhà cung cấp và nhu cầu capex duy trì. Chỉ coi đây là tăng trưởng tốt khi vốn lưu động quay về tiền theo lịch đáng tin cậy.|Investigate further. Earnings have not converted to cash and free cash flow is negative 7. Test receivable aging, confirmed orders, slow inventory, supplier terms and maintenance capex. Treat this as healthy growth only if working capital converts to cash on a credible schedule.',
          {source:officialCbok})
      ]
    },
    {
      id:'corporate-law',group:'foundation',code:'FND 02',status:'ready',batch:1,levels:['I','II','III'],
      title:'Pháp lý doanh nghiệp và quản trị|Corporate Law and Governance',
      description:'Đọc cấu trúc pháp lý, quyền hạn, trách nhiệm, quyền cổ đông và thứ tự ưu tiên trước khi phân tích giá trị.|Read legal form, authority, duties, shareholder rights and claim priority before assessing value.',
      source:'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure',
      disclaimer:'Nội dung là khung phân tích tài chính, không phải tư vấn pháp lý; quy định thay đổi theo quốc gia.|This is a financial-analysis framework, not legal advice; rules vary by jurisdiction.',
      units:[
        fullUnit('legal-forms','Loại hình pháp lý và trách nhiệm|Legal forms and liability',
          'Phân biệt chủ sở hữu cá nhân, hợp danh, công ty trách nhiệm hữu hạn và công ty cổ phần theo pháp nhân, trách nhiệm, thuế, khả năng huy động vốn và tính liên tục. Nhà đầu tư luôn phải xác định ai thực sự mang nghĩa vụ.|Compare sole ownership, partnerships, limited-liability entities and corporations by legal personality, liability, tax, financing capacity and continuity. Investors must identify who actually bears the obligation.',
          ['Pháp nhân tách tài sản doanh nghiệp khỏi chủ sở hữu|Separate personality divides company and owner assets','Trách nhiệm hữu hạn có ngoại lệ|Limited liability has exceptions','Bảo lãnh cá nhân chuyển rủi ro trở lại chủ sở hữu|Personal guarantees return risk to owners','Hình thức pháp lý ảnh hưởng khả năng phát hành vốn|Legal form affects financing choices'],
          'Khoản vay có bảo lãnh của người sáng lập|A founder-guaranteed loan',
          'Công ty trách nhiệm hữu hạn vay 2 triệu. Người sáng lập ký bảo lãnh cá nhân toàn bộ khoản vay. Công ty mất khả năng thanh toán.|A limited-liability company borrows 2 million. Its founder personally guarantees the full loan. The company becomes insolvent.',
          'Có thể kết luận tài sản cá nhân luôn được bảo vệ không?|Can personal assets be assumed protected?',
          'Không. Vỏ bọc trách nhiệm hữu hạn bảo vệ cổ đông đối với nghĩa vụ thông thường của công ty, nhưng bảo lãnh tạo nghĩa vụ hợp đồng riêng của người sáng lập. Phải đọc phạm vi, giới hạn và điều kiện thực thi của bảo lãnh trong luật áp dụng.|No. Limited liability protects owners from ordinary company obligations, but the guarantee creates a separate contractual obligation. Read its scope, cap and enforcement conditions under applicable law.',
          {source:'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure'}),
        fullUnit('authority-contracts','Hợp đồng, đại diện và quyền ký|Contracts, agency and signing authority',
          'Một hợp đồng chỉ tạo giá trị khi bên ký có thẩm quyền, nghĩa vụ rõ, điều kiện có thể thực hiện và chế tài có ý nghĩa. Trong thẩm định, đối chiếu hợp đồng với điều lệ, ủy quyền và phê duyệt nội bộ.|A contract creates value only when signatories have authority, obligations are clear, performance is feasible and remedies matter. In diligence, reconcile contracts with charters, delegations and approvals.',
          ['Quyền thực tế và quyền biểu kiến có thể khác nhau|Actual and apparent authority can differ','Điều kiện tiên quyết ảnh hưởng thời điểm nghĩa vụ|Conditions precedent affect timing','Covenant có thể hạn chế vay, cổ tức và đầu tư|Covenants can restrict debt, dividends and investment','Thay đổi quyền kiểm soát có thể kích hoạt chấm dứt|Change of control may trigger termination'],
          'Giám đốc bán hàng ký hợp đồng vượt hạn mức|A sales director signs above the limit',
          'Quy chế nội bộ giới hạn giám đốc ở 500.000 nhưng họ ký hợp đồng 1,5 triệu. Khách hàng đã giao hàng và trước đây công ty từng chấp nhận giao dịch tương tự.|Internal rules limit a director to 500,000, but they sign for 1.5 million. The counterparty has delivered and the company previously accepted similar transactions.',
          'Nhà phân tích nên ghi nhận nghĩa vụ bằng không hay toàn bộ?|Should an analyst record zero obligation or the full amount?',
          'Không nên tự kết luận bằng không chỉ từ hạn mức nội bộ. Hành vi trước đó có thể tạo quyền biểu kiến hoặc công ty có thể phê chuẩn sau. Ghi nhận rủi ro tranh chấp, xin ý kiến pháp lý và phân tích cả kịch bản hợp đồng có hiệu lực lẫn vô hiệu.|Do not assume zero obligation from an internal limit alone. Prior conduct may create apparent authority or the company may ratify the contract. Flag litigation risk, obtain legal advice and analyze both enforceable and unenforceable scenarios.',
          {source:'https://www.sba.gov/business-guide/manage-your-business/prepare-your-business-emergencies'}),
        fullUnit('board-duties','Hội đồng quản trị, nghĩa vụ và kiểm soát|Board duties and oversight',
          'Hội đồng phê duyệt chiến lược, giám sát điều hành, quản trị rủi ro và bảo vệ lợi ích của tổ chức. Nhà đầu tư đánh giá tính độc lập thực chất, năng lực, thông tin nhận được và cơ chế xử lý xung đột.|Boards approve strategy, oversee management, govern risk and protect the organization. Investors assess substantive independence, expertise, information quality and conflict controls.',
          ['Độc lập danh nghĩa chưa đủ|Nominal independence is insufficient','Ủy ban kiểm toán cần năng lực tài chính|Audit committees need financial expertise','Thù lao có thể bóp méo hành vi|Compensation can distort behavior','Giao dịch bên liên quan cần quy trình riêng|Related-party deals need special controls'],
          'Mua tài sản của người thân CEO|Buying an asset from the CEO’s relative',
          'Công ty dự định mua nhà kho giá 12 triệu từ doanh nghiệp của người thân CEO. Không có định giá độc lập; CEO tham gia cuộc họp phê duyệt.|A company plans to buy a warehouse for 12 million from the CEO’s relative. There is no independent valuation and the CEO joins the approval meeting.',
          'Những bước kiểm soát tối thiểu nào cần có?|What minimum controls are needed?',
          'Công bố đầy đủ quan hệ, để người có xung đột rút khỏi thảo luận và biểu quyết, dùng ủy ban độc lập, lấy định giá và phương án so sánh, ghi rõ lợi ích cho công ty và tuân thủ yêu cầu biểu quyết của luật áp dụng. Giá thị trường hợp lý không tự chữa một quy trình yếu.|Disclose the relationship, recuse the conflicted executive, use an independent committee, obtain valuation and alternatives, document company benefit and follow applicable voting rules. A fair price does not by itself cure a weak process.',
          {videoId:'okczJ-XyJnQ',videoTitle:'Corporate Governance: Boards, Executives, and Financial Oversight — CFI',source:officialCurriculum}),
        fullUnit('shareholder-rights','Quyền cổ đông và hành động vốn|Shareholder rights and capital actions',
          'Quyền biểu quyết, quyền kinh tế, quyền ưu tiên, điều khoản chống pha loãng và cơ cấu nhiều lớp quyết định ai kiểm soát doanh nghiệp và ai chịu tác động của phát hành mới.|Voting, economic, pre-emption, anti-dilution and dual-class terms determine control and who bears the effect of new issuance.',
          ['Một cổ phần không phải lúc nào cũng một phiếu|One share may not equal one vote','Phát hành mới có thể pha loãng kinh tế và quyền kiểm soát|New issues can dilute economics and control','Mua lại cổ phiếu chỉ tạo giá trị ở mức giá phù hợp|Buybacks create value only at an appropriate price','Cổ tức bị giới hạn bởi thanh khoản và luật|Dividends face liquidity and legal limits'],
          'Phát hành riêng lẻ dưới giá thị trường|A discounted private placement',
          'Công ty có 10 triệu cổ phần giá 10, phát hành 2 triệu cổ phần cho cổ đông kiểm soát với giá 6. Cổ đông khác không được mua.|A company has 10 million shares at 10 and issues 2 million shares to the controlling owner at 6. Other owners cannot participate.',
          'Tác động kinh tế sơ bộ đối với cổ đông thiểu số là gì?|What is the preliminary economic effect on minority owners?',
          'Công ty nhận 12 triệu nhưng phát hành quyền đối với giá trị thị trường khoảng 20 triệu trước giao dịch. Phần chênh 8 triệu là chuyển giao giá trị tiềm năng khỏi cổ đông cũ, trước khi xét mục đích vốn và phản ứng giá. Cần kiểm tra quyền ưu tiên, phê duyệt độc lập và nghĩa vụ công bố.|The company receives 12 million for claims worth roughly 20 million at the pre-deal price. The 8 million gap is a potential transfer from existing owners before considering funding purpose and market response. Review pre-emption rights, independent approval and disclosure duties.',
          {source:officialCurriculum}),
        fullUnit('distress-priority','Mất khả năng thanh toán và thứ tự ưu tiên|Distress and claim priority',
          'Khi doanh nghiệp thiếu tiền, giá trị phân bổ theo quyền pháp lý chứ không theo tên gọi kế toán đơn giản. Phân biệt nợ có bảo đảm, chi phí thủ tục, nợ ưu tiên, nợ không bảo đảm, nợ thứ cấp và vốn chủ.|When cash is insufficient, value follows legal rights rather than simple accounting labels. Distinguish secured debt, process costs, priority claims, unsecured debt, subordinated debt and equity.',
          ['Tài sản bảo đảm quyết định nguồn thu hồi riêng|Collateral creates a specific recovery pool','Covenant breach không luôn đồng nghĩa phá sản|A covenant breach is not always insolvency','Giá trị hoạt động liên tục có thể cao hơn thanh lý|Going-concern value may exceed liquidation value','Equity là phần còn lại sau mọi nghĩa vụ|Equity is residual after all claims'],
          'Phân bổ giá trị thanh lý|Distributing liquidation value',
          'Tiền thu ròng là 70. Nợ có bảo đảm 40, chi phí và nghĩa vụ ưu tiên 5, nợ không bảo đảm 50, vốn chủ 30.|Net proceeds are 70. Secured debt is 40, process and priority claims 5, unsecured debt 50 and equity 30.',
          'Giả sử thứ tự đơn giản trên, mỗi nhóm thu hồi bao nhiêu?|Under the simplified priority, what does each class recover?',
          'Nợ có bảo đảm nhận 40, chi phí và ưu tiên nhận 5, còn 25 cho nợ không bảo đảm nên nhóm này thu hồi 50%. Vốn chủ không nhận gì. Trong thực tế phải xác định tài sản bảo đảm, quyền bù trừ và luật phá sản cụ thể.|Secured debt receives 40, process and priority claims 5, leaving 25 for unsecured debt, a 50% recovery. Equity receives zero. Actual analysis must identify collateral, set-off rights and jurisdiction-specific insolvency law.',
          {source:'https://www.sba.gov/business-guide/manage-your-business/close-or-sell-your-business'})
      ]
    },
    {
      id:'accounting-foundations',group:'foundation',code:'FND 03',status:'ready',batch:1,levels:['I','II','III'],
      title:'Nền tảng kế toán|Accounting Foundations',
      description:'Hiểu logic ghi nhận, mối liên kết ba báo cáo và cách chính sách kế toán làm thay đổi lợi nhuận, tài sản và dòng tiền.|Understand recognition logic, the three-statement link and how policies change earnings, assets and cash flow.',
      source:officialCurriculum,
      units:[
        fullUnit('accounting-equation','Phương trình kế toán và bút toán kép|Accounting equation and double entry',
          'Mọi giao dịch phải giữ cân bằng giữa nguồn lực và nguồn tài trợ. Bút toán kép không bảo đảm số liệu đúng về kinh tế, nhưng tạo cấu trúc để truy ngược tác động lên tài sản, nợ, vốn, doanh thu và chi phí.|Every transaction preserves the balance between resources and financing. Double entry does not guarantee economic truth, but it creates a structure for tracing effects on assets, liabilities, equity, revenue and expense.',
          ['Tài sản là nguồn lực do doanh nghiệp kiểm soát|Assets are controlled resources','Nợ là nghĩa vụ hiện tại|Liabilities are present obligations','Vốn chủ là phần còn lại|Equity is the residual','Doanh thu và chi phí chảy vào lợi nhuận giữ lại|Revenue and expense flow into retained earnings'],
          'Thành lập công ty và mua thiết bị|Forming a company and buying equipment',
          'Chủ sở hữu góp 100 tiền mặt. Công ty vay thêm 50 rồi mua thiết bị 120 bằng tiền.|Owners contribute 100 cash. The company borrows 50 and buys equipment for 120 cash.',
          'Bảng cân đối ngay sau giao dịch gồm những gì?|What does the immediate balance sheet contain?',
          'Tiền mặt còn 30 và thiết bị 120, tổng tài sản 150. Nợ vay 50 và vốn góp 100. Chưa có chi phí 120 ngay lập tức nếu thiết bị đáp ứng điều kiện ghi nhận tài sản; chi phí sẽ đi qua khấu hao theo thời gian sử dụng.|Cash is 30 and equipment 120, total assets 150. Debt is 50 and contributed equity 100. The 120 is not immediately expensed if asset recognition criteria are met; depreciation allocates cost over useful life.',
          {formula:'A=L+E',symbols:'A là tài sản; L là nợ phải trả; E là vốn chủ sở hữu.|A is assets; L is liabilities; E is equity.',source:officialCurriculum}),
        fullUnit('three-statements','Ba báo cáo tài chính liên kết thế nào|How the three statements connect',
          'Báo cáo kết quả đo hiệu quả theo kỳ, bảng cân đối là ảnh chụp cuối kỳ và lưu chuyển tiền giải thích biến động tiền. Lợi nhuận không bằng tiền vì ghi nhận dồn tích, khấu hao và vốn lưu động.|The income statement measures period performance, the balance sheet is an end-date snapshot and cash flow explains the change in cash. Profit differs from cash because of accruals, depreciation and working capital.',
          ['Lợi nhuận giữ lại nối kết quả với vốn chủ|Retained earnings links income to equity','Khấu hao giảm lợi nhuận nhưng không phải chi tiền kỳ hiện tại|Depreciation reduces income without current cash payment','Capex xuất hiện trong đầu tư trước khi đi qua chi phí|Capex enters investing before expense','Biến động vốn lưu động điều chỉnh CFO|Working-capital changes adjust CFO'],
          'Bán chịu sau khi đã mua hàng tồn kho|A credit sale after inventory was purchased',
          'Hàng tồn kho giá 60 đã trả kỳ trước được giao cho khách với giá 100, khách trả sau 30 ngày.|Inventory costing 60 was paid last period and is delivered for 100, with customer payment due in 30 days.',
          'Điều gì thay đổi tại ngày giao hàng?|What changes on the delivery date?',
          'Doanh thu tăng 100, giá vốn tăng 60 và lợi nhuận trước thuế tăng 40. Phải thu tăng 100, tồn kho giảm 60, vốn chủ tăng theo lợi nhuận. Tiền chưa tăng. Khi khách trả, tiền tăng 100 và phải thu giảm 100; không ghi doanh thu lần nữa.|Revenue rises 100, cost of sales 60 and pretax profit 40. Receivables rise 100, inventory falls 60 and equity rises through profit. Cash does not change. On collection, cash rises 100 and receivables fall 100; revenue is not recorded again.',
          {videoId:'CE9HnV3b_jY',videoTitle:'The 3 Financial Statements Explained: How They Connect — Ryan O’Connell, CFA, FRM',source:officialCurriculum}),
        fullUnit('accrual-working-capital','Dồn tích, doanh thu và vốn lưu động|Accruals, revenue and working capital',
          'Kế toán dồn tích ghi nhận khi quyền và nghĩa vụ kinh tế phát sinh, không chỉ khi tiền di chuyển. Doanh thu cần được gắn với việc thực hiện nghĩa vụ; khoản thu trước thường tạo nợ hợp đồng.|Accrual accounting records economic rights and obligations rather than only cash movement. Revenue follows performance; advance receipts often create a contract liability.',
          ['Tiền thu trước chưa chắc là doanh thu|Cash received in advance may not be revenue','Phải thu tăng có thể phản ánh tăng trưởng hoặc thu tiền kém|Receivables growth can mean growth or weak collection','Phải trả tăng tạm thời hỗ trợ CFO|Payables growth temporarily supports CFO','Doanh thu và chi phí cần đúng kỳ|Revenue and expense belong in the correct period'],
          'Gói thuê bao trả trước một năm|A prepaid annual subscription',
          'Khách trả 1.200 ngày 1 tháng 1 cho dịch vụ cung cấp đều trong 12 tháng. Bỏ qua thuế.|A customer pays 1,200 on 1 January for service delivered evenly over 12 months. Ignore tax.',
          'Cuối tháng 3 ghi nhận bao nhiêu doanh thu và nợ hợp đồng?|At the end of March, how much revenue and contract liability are recognized?',
          'Doanh thu lũy kế là 300 vì đã cung cấp ba trong mười hai tháng. Tiền vẫn tăng 1.200; nợ hợp đồng còn 900. Ghi toàn bộ 1.200 vào tháng 1 sẽ kéo doanh thu và lợi nhuận về quá sớm.|Cumulative revenue is 300 because three of twelve months have been delivered. Cash remains up 1,200 and the contract liability is 900. Recording all 1,200 in January would accelerate revenue and profit.',
          {source:officialCurriculum}),
        fullUnit('cost-allocation','Hàng tồn kho, khấu hao và vốn hóa|Inventory, depreciation and capitalization',
          'Lựa chọn dòng chi phí và thời gian hữu ích thay đổi thời điểm ghi chi phí, không thay đổi tổng tiền đã trả. Nhà phân tích chuẩn hóa chính sách trước khi so biên lợi nhuận và lợi nhuận trên tài sản.|Cost flow assumptions and useful lives change expense timing, not total cash paid. Analysts normalize policies before comparing margins and returns on assets.',
          ['FIFO và bình quân cho giá vốn khác nhau khi giá biến động|FIFO and average cost differ when prices move','Khấu hao phụ thuộc nguyên giá, giá trị còn lại và thời gian|Depreciation depends on cost, residual value and life','Vốn hóa đẩy chi phí sang tương lai|Capitalization defers expense','Thay đổi ước tính phải được tách khỏi cải thiện vận hành|Estimate changes should be separated from operations'],
          'Kéo dài thời gian khấu hao|Extending useful life',
          'Thiết bị giá 100, không có giá trị còn lại. Công ty đổi thời gian hữu ích từ 5 lên 10 năm ngay khi mua, dùng đường thẳng.|Equipment costs 100 with no residual value. The company changes the useful life from five to ten years at purchase and uses straight line.',
          'Ảnh hưởng năm đầu lên lợi nhuận và tiền mặt là gì?|What is the first-year effect on income and cash?',
          'Khấu hao giảm từ 20 xuống 10, nên lợi nhuận trước thuế tăng 10 so với ước tính 5 năm. Tiền mặt không đổi chỉ vì ước tính kế toán. Phải đánh giá liệu tuổi thọ 10 năm có bằng chứng kỹ thuật và điều chỉnh so sánh với đối thủ.|Depreciation falls from 20 to 10, raising pretax income by 10 versus a five-year life. Cash is unchanged by the accounting estimate itself. Test whether the ten-year life has technical support and normalize peer comparisons.',
          {source:officialCurriculum}),
        fullUnit('earnings-quality','Chất lượng lợi nhuận và dấu hiệu cảnh báo|Earnings quality and warning signs',
          'Lợi nhuận chất lượng cao có nguồn từ hoạt động bền vững, được tiền mặt hỗ trợ và dựa trên ước tính hợp lý. Không một tỷ lệ đơn lẻ chứng minh sai phạm; cần kết hợp xu hướng, thuyết minh và bằng chứng sau ngày khóa sổ.|High-quality earnings come from durable operations, are supported by cash and use reasonable estimates. No single ratio proves misconduct; combine trends, disclosures and subsequent evidence.',
          ['Doanh thu tăng nhanh hơn phải thu là tín hiệu tốt hơn chiều ngược lại|Revenue growing faster than receivables is generally healthier','Lợi nhuận một lần cần tách khỏi kết quả lặp lại|One-off gains should be separated','Vốn hóa chi phí làm tăng lợi nhuận hiện tại|Capitalized costs raise current income','Thu tiền sau ngày khóa sổ kiểm tra chất lượng phải thu|Subsequent collection tests receivable quality'],
          'Lợi nhuận tăng nhưng tiền giảm|Earnings rise while cash falls',
          'Doanh thu tăng 8%, phải thu tăng 45%, tồn kho tăng 35%, CFO giảm 30% và công ty vừa nới điều khoản tín dụng từ 30 lên 90 ngày.|Revenue grows 8%, receivables 45%, inventory 35%, CFO falls 30% and credit terms move from 30 to 90 days.',
          'Có thể kết luận gian lận ngay không và cần kiểm tra gì?|Can fraud be concluded immediately and what should be tested?',
          'Chưa thể kết luận gian lận. Rủi ro chất lượng lợi nhuận đã tăng. Kiểm tra tuổi nợ, thu tiền sau kỳ, trả hàng, giao dịch cuối kỳ, hàng chậm luân chuyển, hợp đồng và lý do thay đổi tín dụng. Xây dựng kịch bản dự phòng nếu một phần phải thu hoặc tồn kho không chuyển thành tiền.|Fraud cannot yet be concluded. Earnings-quality risk has risen. Test aging, subsequent collections, returns, period-end sales, slow inventory, contracts and the reason for changed credit. Build a downside case if some receivables or inventory fail to convert to cash.',
          {source:officialCurriculum})
      ]
    },
    {
      id:'ethics',group:'core',code:'CFA 01',status:'ready',batch:1,levels:['I','II','III'],
      title:'Đạo đức và chuẩn mực nghề nghiệp|Ethical and Professional Standards',
      description:'Dùng quy trình ra quyết định có thể kiểm chứng để xử lý thông tin, nghĩa vụ với khách hàng, nghiên cứu và xung đột lợi ích.|Use a defensible decision process for information, client duties, research and conflicts.',
      source:ethicsSource,
      units:[
        fullUnit('ethical-framework','Khung ra quyết định đạo đức|Ethical decision framework',
          'Bắt đầu bằng sự kiện và bên liên quan, xác định nghĩa vụ, xem xét phương án và hậu quả, xin ý kiến độc lập khi cần, rồi ghi lại lý do. Một quyết định hợp pháp vẫn có thể thiếu đạo đức nếu lợi dụng lỗ hổng hoặc che giấu xung đột.|Start with facts and stakeholders, identify duties, consider alternatives and consequences, seek independent advice when needed and document the rationale. A legal decision can still be unethical if it exploits a loophole or hides a conflict.',
          ['Tách dữ kiện khỏi giả định|Separate facts from assumptions','Xác định người chịu rủi ro và người hưởng lợi|Identify who bears risk and receives benefit','Kiểm tra luật, quy tắc và chính sách nghiêm ngặt nhất|Check the strictest applicable rule','Ghi lại quyết định và điều kiện xem xét lại|Document the decision and review triggers'],
          'Áp lực làm đẹp kết quả cuối quý|Pressure to improve quarter-end results',
          'Quản lý yêu cầu trì hoãn ghi nhận một chi phí hợp lệ sang quý sau vì công ty đang đàm phán vay vốn. Số tiền không làm công ty mất khả năng thanh toán nhưng ảnh hưởng covenant.|A manager asks to defer a valid expense to the next quarter because the company is negotiating a loan. The amount does not cause insolvency but affects a covenant.',
          'Nhà phân tích nội bộ nên phản ứng thế nào?|How should an internal analyst respond?',
          'Xác minh cơ sở ghi nhận và chính sách, từ chối điều chỉnh không có căn cứ, lưu tài liệu và chuyển vấn đề tới kiểm soát, kiểm toán hoặc pháp chế thích hợp. Ý định hỗ trợ doanh nghiệp không biện minh cho báo cáo sai đối với bên cho vay.|Verify recognition and policy, refuse an unsupported adjustment, retain documentation and escalate to appropriate control, audit or legal functions. An intent to help the firm does not justify misleading the lender.',
          {source:ethicsSource}),
        fullUnit('mnpi','Thông tin trọng yếu chưa công khai|Material nonpublic information',
          'Thông tin là trọng yếu khi nhà đầu tư hợp lý có thể xem nó quan trọng; là chưa công khai khi chưa được phổ biến rộng rãi. Người nhận không được giao dịch hoặc khiến người khác giao dịch trên cơ sở thông tin đó.|Information is material when a reasonable investor would consider it important and nonpublic when it has not been broadly disseminated. A recipient must not trade or cause others to trade on it.',
          ['Nguồn đáng tin làm tăng khả năng trọng yếu|Source reliability affects materiality','Tin đồn công khai không tự làm thông tin riêng thành công khai|Public rumors do not cleanse private facts','Mosaic theory dùng thông tin công khai và không trọng yếu|Mosaic theory uses public and immaterial information','Báo tuân thủ và hạn chế giao dịch khi nghi ngờ|Notify compliance and restrict trading when in doubt'],
          'Cuộc gọi riêng trước giờ đóng cửa|A private call before the close',
          'Giám đốc nói riêng rằng công ty vừa mất khách hàng tạo 22% doanh thu. Chưa có thông báo; quỹ đang nắm cổ phiếu.|A director privately says the company lost a customer representing 22% of revenue. There is no announcement and the fund owns the stock.',
          'Có thể bán một nửa vị thế cho tài khoản cá nhân không?|Can half the position be sold in a personal account?',
          'Không. Quy mô và chủ tài khoản không thay đổi bản chất thông tin. Ghi nhận thời gian và nguồn, ngừng giao dịch và khuyến nghị liên quan, báo tuân thủ và chờ phổ biến rộng rãi trước khi đánh giá lại.|No. Trade size and account ownership do not change the information. Record time and source, stop related trading and recommendations, notify compliance and wait for broad dissemination before reassessing.',
          {source:ethicsSource}),
        fullUnit('client-duties','Nghĩa vụ với khách hàng và tính phù hợp|Duties to clients and suitability',
          'Lợi ích khách hàng đứng trước lợi ích của người tư vấn. Khuyến nghị phải phù hợp với mục tiêu, rủi ro, thời hạn, thanh khoản và toàn bộ danh mục; giao dịch phải được phân bổ công bằng theo chính sách đã công bố.|Client interests come before adviser interests. Recommendations must fit objectives, risk, horizon, liquidity and the total portfolio; trades should be allocated fairly under disclosed policy.',
          ['Cập nhật hồ sơ khi hoàn cảnh thay đổi|Update the profile when circumstances change','Phù hợp được đánh giá trong toàn danh mục|Suitability is assessed in portfolio context','Không bảo đảm lợi nhuận không chắc chắn|Do not guarantee uncertain returns','Bảo mật có ngoại lệ theo luật và nghĩa vụ|Confidentiality has legal and duty-based exceptions'],
          'Khách hàng sắp mua nhà nhưng muốn đầu cơ|A home buyer wants to speculate',
          'Khách cần toàn bộ 300.000 trong 10 tháng để trả trước nhà nhưng yêu cầu đầu tư vào quyền chọn công nghệ vì tin thị trường sẽ tăng.|A client needs all 300,000 in ten months for a home deposit but asks to buy technology options because they expect a rally.',
          'Chỉ cần khách ký xác nhận rủi ro là đủ không?|Is a signed risk acknowledgment sufficient?',
          'Không. Chữ ký không biến một khuyến nghị không phù hợp thành phù hợp. Giải thích xung đột với mục tiêu thanh khoản, đề xuất công cụ bảo toàn phù hợp và ghi lại trao đổi. Nếu khách tự quyết trái tư vấn, thực hiện chỉ khi chính sách, pháp luật và phạm vi dịch vụ cho phép.|No. A signature does not make an unsuitable recommendation suitable. Explain the conflict with liquidity, propose an appropriate capital-preservation solution and document the discussion. If the client directs otherwise, proceed only if policy, law and service scope permit.',
          {source:ethicsSource}),
        fullUnit('research-basis','Cơ sở nghiên cứu và giao tiếp với khách hàng|Research basis and client communication',
          'Khuyến nghị cần cơ sở hợp lý, quy trình thẩm định đủ sâu và phân biệt dữ kiện với ý kiến. Trình bày phương pháp, giả định quan trọng, giới hạn và rủi ro có thể làm thay đổi kết luận.|Recommendations need a reasonable basis, sufficient diligence and a distinction between fact and opinion. Communicate method, key assumptions, limitations and risks that could change the conclusion.',
          ['Kiểm tra chất lượng nguồn dữ liệu|Assess source quality','Không chọn dữ liệu chỉ vì ủng hộ kết luận|Do not cherry-pick supporting data','Công bố thay đổi lớn trong mô hình|Disclose material model changes','Lưu hồ sơ đủ để tái tạo phân tích|Keep records that reproduce the analysis'],
          'Mô hình định giá bỏ qua một kịch bản xấu|A valuation omits a downside case',
          'Báo cáo ghi giá mục tiêu 25 nhưng chỉ dùng tăng trưởng 8% và WACC 7%; lịch sử doanh nghiệp cho thấy doanh thu từng giảm 20% trong suy thoái.|A report gives a target of 25 using only 8% growth and 7% WACC; company history shows revenue once fell 20% in recession.',
          'Có thể phát hành báo cáo nếu gọi đây là kịch bản cơ sở không?|Can the report be issued if this is labeled the base case?',
          'Chỉ nên phát hành sau khi trình bày độ nhạy hoặc kịch bản giảm, giải thích cơ sở của tăng trưởng và suất chiết khấu, và công bố giới hạn dữ liệu. Nhãn kịch bản cơ sở không thay thế việc truyền đạt rủi ro trọng yếu.|Issue only after presenting sensitivity or downside analysis, supporting growth and discount assumptions and disclosing data limits. Calling it a base case does not replace communication of material risk.',
          {source:ethicsSource}),
        fullUnit('conflicts','Xung đột lợi ích và ưu tiên giao dịch|Conflicts and transaction priority',
          'Xung đột nên được tránh khi có thể; nếu không, phải công bố nổi bật, cụ thể và dễ hiểu. Giao dịch khách hàng và người sử dụng lao động thường được ưu tiên trước giao dịch cá nhân.|Avoid conflicts where possible; otherwise disclose them prominently, specifically and clearly. Client and employer transactions generally take priority over personal trades.',
          ['Công bố chung chung có thể không đủ|Generic disclosure may be insufficient','Thù lao phụ thuộc kết quả tạo thiên lệch|Outcome-linked compensation creates bias','Tài khoản cá nhân cần giám sát và pre-clearance|Personal accounts need monitoring and pre-clearance','Phân bổ lệnh phải theo quy tắc trước giao dịch|Allocation rules should exist before the trade'],
          'Đợt phát hành được phân bổ ít hơn nhu cầu|An offering is undersubscribed relative to client demand',
          'Quỹ nhận 60% số lượng đã đăng ký. Quản lý muốn phân bổ đủ cho tài khoản lớn trả phí cao rồi chia phần còn lại cho khách nhỏ; tài khoản cá nhân của họ cũng đăng ký.|A fund receives 60% of requested shares. The manager wants to fill high-fee large accounts first, then smaller clients; their personal account also requested shares.',
          'Cách phân bổ nào bảo vệ tính công bằng?|What allocation protects fair dealing?',
          'Áp dụng chính sách khách quan đã có trước, chẳng hạn phân bổ tỷ lệ cho các tài khoản phù hợp, xử lý lô lẻ theo quy tắc nhất quán và loại tài khoản cá nhân khi khách hàng chưa được phục vụ đầy đủ. Ghi lại lý do và kết quả phân bổ.|Apply a pre-existing objective policy, such as pro rata allocation among suitable accounts, handle odd lots consistently and exclude personal accounts while clients remain unfilled. Document rationale and results.',
          {source:ethicsSource})
      ]
    },
    {
      id:'quantitative',group:'core',code:'CFA 02',status:'ready',batch:2,levels:['I','II'],
      title:'Phân tích định lượng|Quantitative Methods',
      description:'Biến dữ liệu và sự không chắc chắn thành quyết định: định giá dòng tiền, xác suất, ước lượng, hồi quy và kiểm định mô hình.|Turn data and uncertainty into decisions through cash-flow valuation, probability, estimation, regression and model validation.',
      source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/time-value-money',
      units:[
        fullUnit('tvm','Giá trị tiền tệ theo thời gian|Time value of money',
          'Một đồng hôm nay có giá trị hơn một đồng tương lai vì có thể sinh lời và vì dòng tiền tương lai mang rủi ro. Hãy đặt mọi dòng tiền lên đúng mốc thời gian, dùng lãi suất phù hợp với kỳ hạn và rủi ro, rồi mới cộng chúng.|A unit of money today is worth more than one in the future because it can earn a return and future cash is risky. Put every cash flow on the correct date, apply a rate consistent with maturity and risk, and only then add values.',
          ['Vẽ timeline trước khi bấm máy|Draw the timeline before calculating','Khớp kỳ ghép lãi với đơn vị của lãi suất|Match compounding periods to the rate','Không cộng tiền ở hai thời điểm khác nhau|Do not add cash from different dates','Dùng cash-flow additivity để phát hiện arbitrage|Use cash-flow additivity to detect arbitrage'],
          'Chọn nhận tiền ngay hay theo hai đợt|Choose cash now or two installments',
          'Phương án A trả 92 hôm nay. Phương án B trả 50 sau một năm và 50 sau hai năm. Suất sinh lời phù hợp là 8% một năm, ghép lãi năm.|Option A pays 92 today. Option B pays 50 in one year and 50 in two years. The appropriate annual effective return is 8%.',
          'Phương án nào có giá trị hiện tại cao hơn và kết luận phụ thuộc vào giả định nào?|Which option has the higher present value, and which assumption drives the conclusion?',
          'Giá trị hiện tại của B bằng 50/1,08 + 50/1,08², xấp xỉ 89,16; thấp hơn 92 nên chọn A nếu rủi ro thanh toán như nhau. Điểm quyết định không phải tổng tiền danh nghĩa 100 mà là thời điểm và suất chiết khấu. Nếu B rủi ro hơn, suất chiết khấu còn phải cao hơn và giá trị của B giảm thêm.|B is worth 50/1.08 + 50/1.08², approximately 89.16; below 92, so choose A if payment risk is equal. The decision is driven by timing and discount rate, not B’s nominal total of 100. Greater payment risk would require a higher rate and reduce B further.',
          {formula:'PV=frac(CF₁;(1+r)¹)+frac(CF₂;(1+r)²)',symbols:'PV là giá trị hiện tại; CFₜ là dòng tiền tại cuối kỳ t; r là suất sinh lời phù hợp cho mỗi kỳ.|PV is present value; CFₜ is the end-of-period cash flow; r is the appropriate return per period.',videoId:'733mgqrzNKs',videoTitle:'Present and future value — Khan Academy',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/time-value-money'}),
        fullUnit('probability','Xác suất, kỳ vọng và cập nhật thông tin|Probability, expectations and updating',
          'Xác suất buộc nhà phân tích nói rõ các kịch bản, bảo đảm tổng khả năng bằng 100% và cập nhật niềm tin khi có dữ kiện mới. Giá trị kỳ vọng là điểm khởi đầu; độ phân tán và mức thua lỗ trong kịch bản xấu mới cho biết rủi ro.|Probability forces analysts to define scenarios, make total probability equal 100% and update beliefs as evidence arrives. Expected value is a starting point; dispersion and downside outcomes reveal risk.',
          ['Các kịch bản phải loại trừ lẫn nhau và bao quát|Scenarios should be mutually exclusive and exhaustive','Tổng xác suất phải bằng 100%|Probabilities must total 100%','Kỳ vọng không phải kết quả chắc chắn|Expected value is not a guaranteed outcome','Bayes cập nhật xác suất có điều kiện bằng bằng chứng mới|Bayes updates conditional probabilities with evidence'],
          'Lợi suất cổ phiếu theo ba trạng thái kinh tế|A stock return across three economic states',
          'Xác suất suy thoái, cơ sở và bùng nổ lần lượt là 20%, 50% và 30%. Lợi suất tương ứng là −25%, 8% và 30%.|Recession, base and boom probabilities are 20%, 50% and 30%. Corresponding returns are −25%, 8% and 30%.',
          'Lợi suất kỳ vọng là bao nhiêu và tại sao không thể trình bày riêng con số này?|What is expected return, and why is that number insufficient on its own?',
          'Lợi suất kỳ vọng bằng 0,20×(−25%) + 0,50×8% + 0,30×30% = 8%. Tuy nhiên nhà đầu tư vẫn có 20% khả năng mất 25%. Báo cáo phải kèm phân phối kịch bản, độ lệch chuẩn hoặc thước đo downside thay vì biến 8% thành lời hứa.|Expected return is 0.20×(−25%) + 0.50×8% + 0.30×30% = 8%. Yet there remains a 20% chance of losing 25%. Present the scenario distribution and dispersion or downside measures instead of turning 8% into a promise.',
          {formula:'E(R)=ΣpᵢRᵢ',symbols:'E(R) là lợi suất kỳ vọng; pᵢ là xác suất kịch bản i; Rᵢ là lợi suất trong kịch bản i; tổng các pᵢ bằng 1.|E(R) is expected return; pᵢ is scenario i probability; Rᵢ is its return; all pᵢ sum to 1.',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/probability-trees-and-conditional-expectations'}),
        fullUnit('sampling','Lấy mẫu, ước lượng và sai lệch|Sampling, estimation and bias',
          'Một mẫu tốt phải đại diện cho tổng thể và quy trình chọn mẫu phải được biết trước. Sai số chuẩn đo độ bất định của ước lượng; tăng số quan sát giúp giảm nhiễu nhưng không chữa được survivorship bias, look-ahead bias hay dữ liệu sai.|A useful sample represents the population and follows a pre-defined selection process. Standard error measures estimation uncertainty; more observations reduce noise but do not cure survivorship, look-ahead or bad-data bias.',
          ['Phân biệt tham số tổng thể và thống kê mẫu|Separate population parameters from sample statistics','Khoảng tin cậy phản ánh bất định của ước lượng|Confidence intervals reflect estimation uncertainty','Mẫu lớn không sửa được quy trình chọn sai|A large sample does not repair biased selection','Kiểm tra missing data, outlier và thay đổi chế độ|Check missing data, outliers and regime changes'],
          'Quỹ tuyên bố chiến lược tạo alpha 3%|A fund claims 3% alpha',
          'Nhà quản lý kiểm tra 120 quỹ còn hoạt động và bỏ các quỹ đã đóng. Alpha trung bình là 3%, độ lệch chuẩn chéo 8%.|The manager studies 120 surviving funds and excludes closed funds. Average alpha is 3% with a cross-sectional standard deviation of 8%.',
          'Khoảng tin cậy hẹp có đủ để kết luận ngành quỹ tạo alpha không?|Is a narrow confidence interval enough to conclude the fund industry creates alpha?',
          'Sai số chuẩn số học là 8%/√120, khoảng 0,73%, nhưng ước lượng vẫn bị survivorship bias vì các quỹ thất bại bị loại. Tính chính xác quanh một mẫu sai không tạo ra kết luận đúng. Cần dựng lại tập quỹ tại thời điểm bắt đầu, gồm quỹ đã đóng và kiểm tra phí, benchmark, backfill.|The mechanical standard error is 8%/√120, about 0.73%, but the estimate remains survivorship-biased because failed funds were removed. Precision around a biased sample does not create validity. Reconstruct the fund universe at the start date, include dead funds and test fees, benchmarks and backfill.',
          {formula:'SE(x̄)=frac(s;√n)',symbols:'SE(x̄) là sai số chuẩn của trung bình mẫu; s là độ lệch chuẩn mẫu; n là số quan sát độc lập.|SE(x̄) is the standard error of the sample mean; s is sample standard deviation; n is the number of independent observations.',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/hypothesis-testing'}),
        fullUnit('regression','Hồi quy và kiểm định giả thuyết|Regression and hypothesis testing',
          'Hồi quy ước lượng mối liên hệ có điều kiện giữa biến giải thích và kết quả. Hệ số có ý nghĩa kinh tế phải đi cùng sai số chuẩn, kiểm định, phần dư và khoảng dự báo; tương quan không tự chứng minh quan hệ nhân quả.|Regression estimates a conditional relation between explanatory variables and outcomes. Economic meaning must be paired with standard errors, tests, residual diagnostics and prediction intervals; correlation alone does not establish causality.',
          ['Giải thích intercept và slope theo đơn vị thực|Interpret intercept and slope in real units','Kiểm tra t-statistic trước khi tin hệ số|Check the t-statistic before trusting a coefficient','R² cao không bảo đảm mô hình đúng|High R² does not ensure a valid model','Phần dư cho thấy phi tuyến, outlier và phương sai thay đổi|Residuals reveal nonlinearity, outliers and heteroskedasticity'],
          'Beta cổ phiếu từ hồi quy tháng|A stock beta from monthly regression',
          'Hồi quy lợi suất vượt trội cổ phiếu theo thị trường cho intercept 0,2% mỗi tháng, slope 1,20 và sai số chuẩn của slope 0,30. Có 60 quan sát.|A regression of stock excess return on market excess return gives a 0.2% monthly intercept, a 1.20 slope and a 0.30 standard error for the slope, using 60 observations.',
          'Có thể nói beta khác 1 ở mức ý nghĩa 5% và cổ phiếu sẽ luôn tăng 1,2% khi thị trường tăng 1% không?|Can we say beta differs from 1 at 5%, and that the stock will always gain 1.2% when the market gains 1%?',
          'Kiểm định beta bằng 1 cho t = (1,20−1)/0,30 = 0,67, không đủ lớn để bác bỏ ở mức 5%. Slope 1,20 là phản ứng trung bình có điều kiện, không phải quy luật từng tháng. Cần xem residual, khoảng tin cậy, stability theo thời gian và biến bị bỏ sót.|Testing beta equal to 1 gives t = (1.20−1)/0.30 = 0.67, insufficient for rejection at 5%. The 1.20 slope is an average conditional sensitivity, not a month-by-month rule. Inspect residuals, confidence intervals, stability and omitted variables.',
          {formula:'ŷ=a+bX',symbols:'ŷ là giá trị dự báo; a là intercept; b là slope ước lượng; X là biến giải thích. Với giả thuyết b=b₀, t=(b−b₀)/SE(b).|ŷ is the prediction; a is the intercept; b is the estimated slope; X is the explanatory variable. For b=b₀, t=(b−b₀)/SE(b).',videoId:'7ArmBVF2dCs',videoTitle:'Linear Regression, Clearly Explained — StatQuest',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/simple-linear-regression'}),
        fullUnit('model-governance','Mô phỏng, backtest và quản trị mô hình|Simulation, backtesting and model governance',
          'Mô hình là một giả thuyết có cấu trúc, không phải máy tạo sự thật. Tách dữ liệu phát triển và kiểm định, giữ nguyên quy tắc trước khi chạy, đưa chi phí giao dịch vào và theo dõi drift sau triển khai.|A model is a structured hypothesis, not a truth machine. Separate development and validation data, freeze rules before testing, include trading costs and monitor drift after deployment.',
          ['Không dùng tương lai để tạo biến quá khứ|Do not use future information in historical features','Out-of-sample phải thật sự chưa được nhìn|Out-of-sample data must be genuinely unseen','Backtest cần phí, spread và độ trễ thực thi|Backtests need fees, spreads and execution delay','Thiết lập ngưỡng dừng và lịch tái thẩm định|Set stop thresholds and revalidation dates'],
          'Chiến lược 200 tín hiệu có Sharpe 2,1|A 200-signal strategy with a 2.1 Sharpe ratio',
          'Nhóm thử 200 yếu tố trên cùng dữ liệu 2015–2025, chọn 5 yếu tố tốt nhất và báo cáo kết quả trên toàn giai đoạn. Chi phí giao dịch chưa được tính.|A team tests 200 factors on the same 2015–2025 data, selects the best five and reports performance over the whole period. Trading costs are excluded.',
          'Tại sao kết quả chưa thể đầu tư và quy trình kiểm định tối thiểu là gì?|Why is the result not investable, and what is the minimum validation process?',
          'Việc chọn trong 200 yếu tố tạo data-snooping; toàn giai đoạn không còn là out-of-sample. Hãy tách train/validation/test theo thời gian, dùng walk-forward, điều chỉnh multiple testing, kiểm tra turnover, capacity, spread và delay. Sau triển khai, so sai số thực tế với ngưỡng phê duyệt và dừng khi mô hình drift.|Selection from 200 factors creates data snooping; the full period is no longer out-of-sample. Split train, validation and test data chronologically, use walk-forward tests, adjust for multiple testing and include turnover, capacity, spread and delay. Monitor live error against approval limits and stop on drift.',
          {source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/evaluating-regression-model-fit'})
      ]
    },
    {
      id:'economics',group:'core',code:'CFA 03',status:'ready',batch:2,levels:['I','II'],
      title:'Kinh tế học|Economics',
      description:'Kết nối hành vi doanh nghiệp với cung cầu, cấu trúc thị trường, chu kỳ, chính sách, lạm phát, dòng vốn và tỷ giá.|Connect business behavior to supply and demand, market structure, cycles, policy, inflation, capital flows and exchange rates.',
      source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/understanding-business-cycles',
      units:[
        fullUnit('supply-demand','Cung, cầu và độ co giãn|Supply, demand and elasticity',
          'Giá cân bằng phản ánh cả đường cung lẫn đường cầu. Khi phân tích thay đổi giá, trước hết xác định đường nào dịch chuyển; sau đó dùng độ co giãn để dự báo sản lượng, doanh thu và bên chịu thuế.|Equilibrium price reflects both supply and demand. When price changes, first identify which curve shifted; then use elasticity to infer quantity, revenue and tax incidence.',
          ['Phân biệt di chuyển dọc đường với dịch chuyển đường|Separate movement along a curve from a curve shift','Co giãn phụ thuộc thời gian và khả năng thay thế|Elasticity depends on time and substitutes','Cầu kém co giãn giúp tăng giá nhưng có giới hạn|Inelastic demand supports price increases within limits','Thuế rơi nhiều hơn vào bên kém co giãn|Tax burdens fall more on the less elastic side'],
          'Ứng dụng thuê bao muốn tăng giá 10%|A subscription app considers a 10% price increase',
          'Giá hiện tại là 20, có 100.000 thuê bao. Dữ liệu thử nghiệm ước tính độ co giãn cầu theo giá là −0,6 trong 12 tháng đầu.|Current price is 20 with 100,000 subscribers. Test data estimates price elasticity of demand at −0.6 over the first 12 months.',
          'Ước tính thay đổi sản lượng và doanh thu, rồi nêu rủi ro của phép tính.|Estimate volume and revenue changes, then state the calculation risk.',
          'Sản lượng dự kiến giảm khoảng 6% còn 94.000. Giá mới 22 nên doanh thu tăng từ 2,0 triệu lên khoảng 2,068 triệu, tức 3,4%. Tuy nhiên co giãn có thể phi tuyến, churn có độ trễ và đối thủ có thể phản ứng; vì vậy cần thí nghiệm theo cohort và theo dõi lifetime value, không chỉ doanh thu tháng đầu.|Quantity is expected to fall about 6% to 94,000. At a price of 22, revenue rises from 2.0 million to about 2.068 million, or 3.4%. Elasticity may be nonlinear, churn delayed and competitors responsive; test by cohort and monitor lifetime value, not just first-month revenue.',
          {formula:'ε=frac(%ΔQ;%ΔP)',symbols:'ε là độ co giãn cầu theo giá; %ΔQ là phần trăm thay đổi lượng cầu; %ΔP là phần trăm thay đổi giá.|ε is price elasticity of demand; %ΔQ is percentage change in quantity demanded; %ΔP is percentage change in price.',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/topics-in-demand-and-supply-analysis'}),
        fullUnit('market-structure','Cấu trúc thị trường và hành vi doanh nghiệp|Market structure and firm behavior',
          'Số đối thủ chỉ là bề mặt. Quyền định giá còn phụ thuộc rào cản gia nhập, chi phí chuyển đổi, khác biệt sản phẩm, công suất, quy định và phản ứng chiến lược của đối thủ.|Competitor count is only the surface. Pricing power also depends on entry barriers, switching costs, differentiation, capacity, regulation and strategic response.',
          ['Cạnh tranh hoàn hảo chấp nhận giá thị trường|Perfect competitors take market prices','Độc quyền nhóm phải dự đoán phản ứng đối thủ|Oligopolies anticipate rival reactions','Rào cản gia nhập quyết định độ bền của lợi nhuận|Entry barriers shape profit durability','HHI và thị phần cần đi cùng dữ liệu hành vi|HHI and shares need behavioral evidence'],
          'Ba hãng kiểm soát 85% thị trường xi măng|Three firms control 85% of a cement market',
          'Nhu cầu địa phương tăng 4%. Một hãng mở công suất mới tương đương 12% thị trường; sản phẩm ít khác biệt và chi phí vận chuyển cao.|Local demand grows 4%. One firm adds capacity equal to 12% of the market; products are weakly differentiated and transport is costly.',
          'Mức tập trung cao có đủ để dự báo biên lợi nhuận tăng không?|Is high concentration enough to forecast margin expansion?',
          'Không. Công suất tăng nhanh hơn cầu có thể kích hoạt cạnh tranh giá dù chỉ có ba hãng. Chi phí vận chuyển tạo thị trường địa lý nhỏ và có thể bảo vệ từng khu vực, nhưng cần lập bảng cung–cầu theo vùng, chi phí tiền mặt của từng nhà máy và lịch bảo dưỡng trước khi dự báo giá.|No. Capacity growth above demand can trigger price competition even with three firms. Transport costs create local markets and may protect regions, but forecast only after mapping regional supply and demand, plant cash costs and maintenance schedules.',
          {source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/the-firm-and-market-structures'}),
        fullUnit('business-cycle','Chu kỳ kinh doanh, tín dụng và chỉ báo|Business cycles, credit and indicators',
          'Chu kỳ là sự dao động quanh xu hướng dài hạn. Dùng tập hợp chỉ báo dẫn dắt, đồng thời và trễ; không suy luận từ một con số đơn lẻ. Chu kỳ tín dụng có thể khuếch đại cả mở rộng lẫn suy thoái.|The cycle fluctuates around a long-run trend. Use a dashboard of leading, coincident and lagging indicators rather than one data point. Credit cycles can amplify expansions and contractions.',
          ['Đơn hàng mới thường đi trước sản xuất|New orders often lead production','Việc làm thường xác nhận muộn hơn|Employment often confirms later','Đường cong lợi suất là tín hiệu, không phải đồng hồ đếm ngược|The yield curve is a signal, not a countdown clock','Tín dụng thắt chặt làm giảm cầu trước khi nợ xấu tăng|Tighter credit reduces demand before defaults rise'],
          'PMI giảm nhưng thất nghiệp vẫn thấp|PMI falls while unemployment remains low',
          'Đơn hàng mới giảm dưới 50 ba tháng, tồn kho thành phẩm tăng, tăng trưởng tín dụng chậm lại; thất nghiệp vẫn ở đáy và GDP quý trước dương.|New orders stay below 50 for three months, finished-goods inventory rises and credit growth slows; unemployment remains at a low and prior-quarter GDP is positive.',
          'Nhà phân tích nên gọi đây là suy thoái đã xác nhận hay rủi ro giảm tốc tăng?|Should the analyst call a confirmed recession or rising slowdown risk?',
          'Rủi ro giảm tốc đang tăng nhưng chưa đủ để tuyên bố suy thoái. Đơn hàng và tín dụng là tín hiệu dẫn dắt, trong khi thất nghiệp và GDP công bố trễ. Hạ giả định sản lượng nhạy chu kỳ, kiểm tra spread tín dụng và chờ dữ liệu đồng thời xác nhận thay vì dùng nhãn nhị phân quá sớm.|Slowdown risk is rising but recession is not confirmed. Orders and credit lead, while unemployment and GDP are lagged. Reduce cyclical volume assumptions, watch credit spreads and seek coincident confirmation rather than applying a binary label too early.',
          {videoId:'ndit6jedwKo',videoTitle:'Real Business Cycle — Marginal Revolution University',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/understanding-business-cycles'}),
        fullUnit('policy','Chính sách, lạm phát và lãi suất thực|Policy, inflation and real rates',
          'Chính sách tiền tệ truyền qua lãi suất, tín dụng, kỳ vọng, giá tài sản và tỷ giá; chính sách tài khóa truyền qua chi tiêu và thuế. Tác động có độ trễ, phụ thuộc uy tín và có thể khác nhau giữa người vay, ngân hàng, người gửi tiền và chính phủ.|Monetary policy transmits through rates, credit, expectations, assets and FX; fiscal policy through spending and tax. Effects are lagged, credibility-dependent and unequal across borrowers, banks, savers and governments.',
          ['Phân biệt lãi suất danh nghĩa và thực|Separate nominal and real interest rates','Kỳ vọng lạm phát ảnh hưởng đường cong lợi suất|Inflation expectations shape the yield curve','Thắt chặt tác động mạnh lên doanh nghiệp tái cấp vốn sớm|Tightening hits near-term refinancers hardest','Phối hợp tiền tệ–tài khóa quyết định tổng cầu|Monetary–fiscal mix shapes aggregate demand'],
          'Ngân hàng trung ương tăng lãi suất khi lạm phát 6%|A central bank hikes while inflation is 6%',
          'Lãi suất chính sách tăng từ 3% lên 5%. Một doanh nghiệp bất động sản có 70% nợ thả nổi; ngân hàng có nhiều tiền gửi không kỳ hạn; nhà xuất khẩu thu USD.|Policy rates rise from 3% to 5%. A developer has 70% floating-rate debt; a bank has many non-interest-bearing deposits; an exporter earns USD.',
          'Ai chịu ảnh hưởng trước và tại sao không thể kết luận chỉ từ mức tăng 2 điểm phần trăm?|Who is affected first, and why is the two-point hike alone insufficient?',
          'Doanh nghiệp nợ thả nổi chịu chi phí lãi tăng sớm. Biên lãi ngân hàng có thể tăng nếu tiền gửi điều chỉnh chậm nhưng rủi ro tín dụng cũng tăng. Nhà xuất khẩu có thể hưởng lợi nếu nội tệ yếu, song tỷ giá còn phụ thuộc kỳ vọng và dòng vốn. Cần tính lãi suất thực: xấp xỉ (1,05/1,06)−1 = −0,94%, cho thấy chính sách danh nghĩa cao nhưng điều kiện thực vẫn chưa chắc thắt chặt.|Floating-rate borrowers feel higher interest first. Bank margins may rise if deposits reprice slowly, but credit risk increases. Exporters may gain from weaker domestic currency, though expectations and flows matter. The real rate is approximately (1.05/1.06)−1 = −0.94%, so a high nominal rate may not yet be restrictive in real terms.',
          {formula:'rᵣ=frac(1+i;1+π)−1',symbols:'rᵣ là lãi suất thực; i là lãi suất danh nghĩa; π là lạm phát kỳ vọng cho cùng kỳ.|rᵣ is the real rate; i is the nominal rate; π is expected inflation for the same horizon.',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/monetary-policy'}),
        fullUnit('fx','Thương mại, dòng vốn và tỷ giá|Trade, capital flows and exchange rates',
          'Tỷ giá ngắn hạn bị chi phối bởi kỳ vọng và dòng vốn; dài hạn chịu tác động của lạm phát tương đối, năng suất, cán cân thanh toán và rủi ro quốc gia. Parity giúp định giá forward nhưng không phải máy dự báo spot hoàn hảo.|Short-run FX is driven by expectations and flows; long-run value reflects relative inflation, productivity, external balances and country risk. Parity helps price forwards but is not a perfect spot forecast.',
          ['Luôn ghi rõ đồng tiền cơ sở và đồng tiền định giá|Always define base and price currencies','Forward points phản ánh chênh lệch lãi suất|Forward points reflect rate differentials','Hedge loại rủi ro tỷ giá nhưng có chi phí cơ hội|Hedging removes FX risk but has opportunity cost','Carry trade có tail risk khi vốn đảo chiều|Carry trades carry tail risk when flows reverse'],
          'Nhà nhập khẩu cần trả 10 triệu USD sau một năm|An importer owes USD 10 million in one year',
          'Spot là 7,20 nội tệ/USD. Lãi suất nội tệ 5%, lãi suất USD 3%. Doanh nghiệp để toàn bộ khoản phải trả chưa phòng hộ vì kỳ vọng nội tệ mạnh lên.|Spot is 7.20 domestic currency per USD. Domestic interest is 5% and USD interest is 3%. The company leaves the payable unhedged because it expects domestic appreciation.',
          'Forward no-arbitrage xấp xỉ bao nhiêu và quyết định hedge nên dựa vào điều gì?|What is the approximate no-arbitrage forward, and what should drive the hedge decision?',
          'Forward một năm xấp xỉ 7,20×1,05/1,03 = 7,34 nội tệ/USD. Đây là mức khóa chi phí gần 73,4 triệu nội tệ, không phải dự báo spot. Quyết định hedge phải dựa trên khả năng chịu lỗ, biên lợi nhuận, covenant và chính sách rủi ro; dự báo tỷ giá chỉ là đầu vào thứ cấp.|The one-year forward is approximately 7.20×1.05/1.03 = 7.34 domestic per USD, locking cost near 73.4 million domestic. It is not a spot forecast. Hedge based on loss capacity, margin, covenants and risk policy; FX views are secondary.',
          {formula:'F₀,₁=S₀×frac(1+iᵈ;1+iᶠ)',symbols:'F₀,₁ là forward một năm theo nội tệ trên ngoại tệ; S₀ là spot; iᵈ là lãi suất nội tệ; iᶠ là lãi suất ngoại tệ.|F₀,₁ is the one-year forward in domestic per foreign currency; S₀ is spot; iᵈ is domestic interest; iᶠ is foreign interest.',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/currency-exchange-rates-understanding-equilibrium-value'})
      ]
    },
    {
      id:'fsa',group:'core',code:'CFA 04',status:'ready',batch:2,levels:['I','II'],
      title:'Phân tích báo cáo tài chính|Financial Statement Analysis',
      description:'Nối ba báo cáo, chuẩn hóa chính sách kế toán, kiểm tra chất lượng lợi nhuận và biến dữ liệu quá khứ thành giả định dự báo.|Link the three statements, normalize accounting, test earnings quality and convert history into forecast assumptions.',
      source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/financial-analysis-techniques',
      units:[
        fullUnit('framework','Khung phân tích, tỷ số và chuẩn hóa|Analysis framework, ratios and normalization',
          'Bắt đầu từ mục tiêu quyết định, hiểu mô hình kinh doanh, chuẩn hóa dữ liệu có thể so sánh, rồi phân tích tăng trưởng, hiệu quả, thanh khoản, đòn bẩy và lợi nhuận. Tỷ số là câu hỏi chẩn đoán, không phải kết luận độc lập.|Start with the decision objective, understand the business, normalize comparable data, then analyze growth, efficiency, liquidity, leverage and returns. Ratios are diagnostic questions, not standalone conclusions.',
          ['Common-size tách quy mô khỏi cấu trúc|Common-size analysis separates size from structure','So sánh phải thống nhất kỳ, tiền tệ và chính sách|Comparisons need consistent periods, currency and policy','DuPont tách biên, vòng quay và đòn bẩy|DuPont separates margin, turnover and leverage','Đọc thuyết minh trước khi giải thích biến động|Read notes before explaining movements'],
          'Hai công ty cùng có ROE 18%|Two companies both report 18% ROE',
          'A có biên ròng 12%, vòng quay tài sản 1,0 và đòn bẩy tài chính 1,5. B có biên 4%, vòng quay 1,5 và đòn bẩy 3,0.|A has a 12% net margin, 1.0 asset turnover and 1.5 financial leverage. B has a 4% margin, 1.5 turnover and 3.0 leverage.',
          'ROE giống nhau có nghĩa chất lượng kinh tế giống nhau không?|Does equal ROE imply equal economic quality?',
          'Không. A tạo ROE từ biên cao với đòn bẩy thấp hơn; B phụ thuộc nhiều vào nợ. Cần so stability của biên, chất lượng tài sản, chi phí nợ và khả năng tái đầu tư. DuPont chỉ chỉ ra nơi cần điều tra chứ chưa chọn người thắng.|No. A generates ROE through high margins with lower leverage; B relies more on debt. Compare margin stability, asset quality, debt cost and reinvestment capacity. DuPont identifies where to investigate; it does not by itself choose a winner.',
          {formula:'ROE=frac(NI;Sales)×frac(Sales;Assets)×frac(Assets;Equity)',symbols:'NI/Sales là biên lợi nhuận ròng; Sales/Assets là vòng quay tài sản; Assets/Equity là đòn bẩy tài chính bình quân.|NI/Sales is net margin; Sales/Assets is asset turnover; Assets/Equity is average financial leverage.',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/financial-analysis-techniques'}),
        fullUnit('revenue-tax','Doanh thu, chi phí và thuế|Revenue, expenses and taxes',
          'Doanh thu được ghi khi nghĩa vụ thực hiện được thỏa mãn và quyền kiểm soát chuyển giao, không nhất thiết khi thu tiền. Chi phí phải được phân loại theo bản chất kinh tế; thuế hiện hành và thuế hoãn lại giải thích chênh lệch giữa lợi nhuận kế toán và tiền thuế.|Revenue follows satisfied performance obligations and transfer of control, not necessarily cash collection. Expenses need economic classification; current and deferred tax explain differences between accounting profit and cash tax.',
          ['Đối chiếu doanh thu với hợp đồng và nghĩa vụ thực hiện|Reconcile revenue with contracts and performance obligations','Tách chi phí định kỳ khỏi khoản bất thường thật sự|Separate recurring costs from genuine one-offs','Vốn hóa chi phí làm lợi nhuận hiện tại cao hơn|Capitalizing costs raises current profit','Thuế hoãn lại chỉ có giá trị khi chênh lệch đảo chiều|Deferred tax matters when temporary differences reverse'],
          'Bán phần mềm ba năm kèm triển khai|A three-year software sale with implementation',
          'Khách trả trước 360 cho ba năm thuê bao và 60 cho triển khai tùy chỉnh. Triển khai không tạo sản phẩm riêng và hoàn thành trong tháng đầu.|A customer prepays 360 for a three-year subscription and 60 for customized implementation. Implementation is not a separate product and finishes in month one.',
          'Có nên ghi toàn bộ 420 là doanh thu tháng đầu không?|Should all 420 be recognized in month one?',
          'Không nếu triển khai không phải nghĩa vụ riêng và giá trị được chuyển giao trong suốt dịch vụ. Tổng consideration 420 được phân bổ và ghi nhận theo thời gian ba năm, khoảng 11,67 mỗi tháng nếu mô hình chuyển giao đều. Tiền thu trước làm tăng cash và contract liability; nó không tự tạo doanh thu.|No, if implementation is not a separate obligation and value transfers over the service term. Total consideration of 420 is recognized over three years, about 11.67 monthly under straight-line transfer. Upfront cash raises cash and a contract liability; it does not itself create revenue.',
          {source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/analysis-of-income-taxes'}),
        fullUnit('assets-debt','Tồn kho, tài sản dài hạn và nghĩa vụ|Inventory, long-lived assets and obligations',
          'Chính sách tồn kho, khấu hao, vốn hóa và impairment làm thay đổi thời điểm ghi nhận lợi nhuận. So sánh doanh nghiệp đòi hỏi đưa các lựa chọn này về nền kinh tế chung và đọc cả nghĩa vụ thuê, bảo hành, lương hưu, covenant.|Inventory, depreciation, capitalization and impairment policies shift the timing of profit. Comparability requires translating choices to common economics and reading leases, warranties, pensions and covenants.',
          ['Giá tăng làm phương pháp tồn kho thay đổi biên và tài sản|Rising costs make inventory methods alter margin and assets','Useful life dài giảm khấu hao hiện tại|Longer useful lives reduce current depreciation','Impairment thường xác nhận kỳ vọng đã xấu trước đó|Impairment often confirms earlier deterioration','Nợ ngoài bảng vẫn có thể là nghĩa vụ kinh tế|Off-balance-sheet items may be economic obligations'],
          'Hai nhà máy giống nhau nhưng khấu hao khác nhau|Two identical plants use different depreciation estimates',
          'A khấu hao máy 100 trong 5 năm; B dùng 10 năm. Cả hai không có giá trị còn lại và sản lượng năm đầu giống nhau.|A depreciates a 100 machine over 5 years; B over 10 years. Both assume zero residual value and have identical first-year output.',
          'Chênh lệch EBIT năm đầu là bao nhiêu và nhà phân tích nên điều chỉnh thế nào?|What is the first-year EBIT difference, and how should an analyst adjust?',
          'Khấu hao đường thẳng của A là 20, B là 10; B báo EBIT cao hơn 10 chỉ do ước tính. Kiểm tra tuổi tài sản, capex duy trì, tỷ lệ hỏng và chính sách ngành. Để so sánh, có thể điều chỉnh B về vòng đời 5 năm hoặc dùng cash return sau maintenance capex.|Straight-line depreciation is 20 for A and 10 for B; B reports EBIT 10 higher solely from an estimate. Check asset age, maintenance capex, failure rates and peers. Normalize B to a five-year life or compare cash returns after maintenance capex.',
          {source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/analysis-of-long-term-assets'}),
        fullUnit('cash-quality','Dòng tiền và chất lượng báo cáo|Cash flow and reporting quality',
          'Lợi nhuận dùng dồn tích để đo hoạt động; dòng tiền cho thấy thời điểm thu chi và khả năng tài trợ. Chênh lệch giữa lợi nhuận và CFO có thể bình thường do tăng trưởng, nhưng kéo dài hoặc đi cùng AR/tồn kho tăng nhanh là tín hiệu điều tra.|Accrual earnings measure activity; cash flow shows payment timing and financing capacity. Earnings–CFO gaps may reflect growth, but persistent gaps with fast-growing receivables or inventory require investigation.',
          ['Nối NI với CFO qua non-cash và vốn lưu động|Bridge NI to CFO through non-cash items and working capital','Phân loại cash flow khác nhau giữa IFRS và US GAAP|Cash-flow classification can differ under IFRS and US GAAP','CFO tăng do kéo dài phải trả chưa chắc bền|CFO lifted by stretching payables may be unsustainable','So cash conversion với tăng trưởng và điều khoản thương mại|Compare cash conversion with growth and trading terms'],
          'Doanh thu tăng 10% nhưng phải thu tăng 45%|Revenue rises 10% while receivables rise 45%',
          'NI là 50, khấu hao 12, phải thu tăng 35, tồn kho tăng 10 và phải trả tăng 8. Không có khoản non-cash khác.|NI is 50, depreciation 12, receivables increase 35, inventory increases 10 and payables increase 8. There are no other non-cash items.',
          'CFO theo phương pháp gián tiếp là bao nhiêu và tín hiệu chất lượng chính là gì?|What is indirect-method CFO, and what is the main quality signal?',
          'CFO = 50 + 12 − 35 − 10 + 8 = 25. CFO chỉ bằng một nửa NI và khoản kéo lớn nhất là phải thu. Điều này không tự chứng minh gian lận, nhưng cần kiểm tra tuổi nợ, khách hàng tập trung, quyền trả lại, factoring và doanh thu ghi cuối kỳ.|CFO = 50 + 12 − 35 − 10 + 8 = 25. CFO is half of NI and receivables are the largest drag. This does not prove manipulation, but requires receivable aging, customer concentration, return rights, factoring and period-end revenue tests.',
          {formula:'CFO=NI+NCC−ΔNWC',symbols:'CFO là tiền từ hoạt động; NI là lợi nhuận ròng; NCC là chi phí không dùng tiền; ΔNWC là phần tăng vốn lưu động hoạt động ròng làm tiêu hao tiền.|CFO is operating cash flow; NI is net income; NCC is non-cash charges; ΔNWC is the increase in operating net working capital that uses cash.',videoId:'CE9HnV3b_jY',videoTitle:'How the three financial statements connect — Ryan O’Connell',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/analyzing-statements-of-cash-flows-i'}),
        fullUnit('forecast','Mô hình dự báo và đầu vào định giá|Forecast model and valuation inputs',
          'Dự báo tốt đi từ driver kinh tế sang báo cáo tích hợp: sản lượng×giá tạo doanh thu, cấu trúc chi phí tạo biên, điều khoản thương mại tạo vốn lưu động, capex tạo công suất và khấu hao, financing cân bằng cash.|A sound forecast moves from economic drivers to integrated statements: volume×price drives revenue, cost structure drives margin, trading terms drive working capital, capex drives capacity and depreciation, and financing balances cash.',
          ['Dùng driver có thể kiểm chứng thay vì tăng trưởng tùy ý|Use testable drivers instead of arbitrary growth','Ba báo cáo phải cân bằng trong từng kịch bản|All three statements must balance in every scenario','Base, bull, bear chỉ thay đổi giả định có lý do|Base, bull and bear change justified assumptions','Stress liquidity trước khi định giá equity|Stress liquidity before valuing equity'],
          'Nhà bán lẻ mở thêm 20 cửa hàng|A retailer opens 20 stores',
          '100 cửa hàng cũ bán 1,0 mỗi cửa hàng. Cửa hàng mới mở giữa năm, đạt 60% năng suất cửa hàng trưởng thành; same-store sales tăng 3%. Biên EBIT hiện là 8%, mỗi cửa hàng mới cần 0,25 capex và 0,05 vốn lưu động.|One hundred mature stores sell 1.0 each. Twenty new stores open midyear at 60% mature productivity; same-store sales grow 3%. EBIT margin is 8%; each new store needs 0.25 capex and 0.05 working capital.',
          'Doanh thu dự báo và nhu cầu tiền tăng thêm tối thiểu là bao nhiêu trước financing?|What are forecast revenue and minimum incremental cash needs before financing?',
          'Cửa hàng cũ tạo 103. Cửa hàng mới đóng góp 20×0,5 năm×0,60×1,0 = 6; tổng doanh thu khoảng 109. Capex mới là 5 và vốn lưu động mới 1, nên cần ít nhất 6 tiền trước các thay đổi khác. Sau đó mới dự báo EBIT, thuế, khấu hao và kiểm tra cash balance/covenant.|Mature stores generate 103. New stores contribute 20×0.5 year×0.60×1.0 = 6, so revenue is about 109. New capex is 5 and working capital 1, requiring at least 6 of cash before other changes. Then forecast EBIT, tax and depreciation and test cash balance and covenants.',
          {source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/financial-reporting-quality'})
      ]
    },
    {
      id:'corporate-finance',group:'core',code:'CFA 05',status:'ready',batch:2,levels:['I','II'],
      title:'Tài chính doanh nghiệp|Corporate Finance',
      description:'Ra quyết định về quản trị, thanh khoản, dự án, nguồn vốn và tái cấu trúc với tiêu chuẩn tạo giá trị dài hạn.|Make governance, liquidity, project, financing and restructuring decisions against long-term value creation.',
      source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/capital-investments-and-capital-allocation',
      units:[
        fullUnit('governance','Quản trị và các bên liên quan|Governance and stakeholders',
          'Quản trị tốt thiết kế quyền quyết định, thông tin, giám sát và động cơ để giảm xung đột giữa cổ đông, quản lý, chủ nợ, nhân viên, khách hàng và cộng đồng. Đánh giá cơ chế thực tế chứ không chỉ số lượng thành viên độc lập.|Good governance designs decision rights, information, oversight and incentives to reduce conflicts among shareholders, managers, lenders, employees, customers and communities. Assess mechanisms in practice, not just independent-director counts.',
          ['Map principal, agent và thông tin bất cân xứng|Map principals, agents and information asymmetry','Thù lao phải khớp horizon tạo giá trị|Compensation should match the value-creation horizon','Covenant bảo vệ chủ nợ nhưng có thể hạn chế linh hoạt|Covenants protect lenders but can constrain flexibility','Board cần dữ liệu, chuyên môn và quyền phản biện|Boards need data, expertise and challenge rights'],
          'CEO được thưởng theo EPS một năm|A CEO is paid on one-year EPS',
          '70% bonus phụ thuộc tăng trưởng EPS năm hiện tại. Công ty có thể mua lại cổ phiếu bằng nợ hoặc cắt R&D để đạt mục tiêu; vesting diễn ra ngay cuối năm.|Seventy percent of bonus depends on current-year EPS growth. The company can debt-fund a buyback or cut R&D to hit the target; vesting occurs at year-end.',
          'Thiết kế này tạo rủi ro gì và cần sửa như thế nào?|What risk does this design create, and how should it change?',
          'Nó khuyến khích financial engineering và hy sinh đầu tư dài hạn. Dùng chỉ tiêu nhiều năm gồm ROIC, dòng tiền, an toàn, chất lượng khách hàng; hoãn vesting, có clawback và giới hạn buyback khi leverage cao. Board phải xem nguyên nhân tạo EPS, không chỉ mức EPS.|It encourages financial engineering and sacrificing long-term investment. Use multi-year ROIC, cash flow, safety and customer-quality metrics; defer vesting, add clawbacks and restrict buybacks at high leverage. The board should examine the source of EPS, not only the number.',
          {videoId:'okczJ-XyJnQ',videoTitle:'Corporate Governance — Corporate Finance Institute',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/corporate-governance-conflicts-mechanisms-risks-and-benefits'}),
        fullUnit('working-capital','Vốn lưu động và thanh khoản|Working capital and liquidity',
          'Vốn lưu động chuyển hoạt động bán hàng thành tiền. Tối ưu không có nghĩa ép mọi số ngày xuống thấp nhất: tồn kho bảo vệ dịch vụ, tín dụng thương mại hỗ trợ bán hàng và trả nhà cung cấp quá chậm có thể phá chuỗi cung ứng.|Working capital converts operations into cash. Optimization does not mean minimizing every day count: inventory protects service, trade credit supports sales and delaying suppliers too far can damage the supply chain.',
          ['DIO đo số ngày hàng nằm trong kho|DIO measures inventory days','DSO đo tốc độ thu tiền khách hàng|DSO measures customer collection speed','DPO đo thời gian tài trợ từ nhà cung cấp|DPO measures supplier financing days','Liquidity buffer phải khớp stress outflow và covenant|Liquidity buffers should match stressed outflows and covenants'],
          'Nhà phân phối muốn giải phóng tiền|A distributor wants to release cash',
          'COGS năm là 365, doanh thu tín dụng 730 và mua hàng 400. Tồn kho 60, phải thu 90, phải trả 50. Dùng 365 ngày.|Annual COGS is 365, credit sales 730 and purchases 400. Inventory is 60, receivables 90 and payables 50. Use 365 days.',
          'Cash conversion cycle là bao nhiêu và cải thiện 10 ngày DSO giải phóng bao nhiêu tiền?|What is the cash conversion cycle, and how much cash does a ten-day DSO improvement release?',
          'DIO=60 ngày; DSO=45 ngày; DPO≈45,6 ngày; CCC≈59,4 ngày. Giảm DSO 10 ngày giải phóng khoảng 730/365×10 = 20 tiền. Phải kiểm tra việc siết tín dụng có làm mất khách tốt hoặc chỉ đẩy doanh số sang đối thủ hay không.|DIO=60 days; DSO=45 days; DPO≈45.6 days; CCC≈59.4 days. Reducing DSO ten days releases about 730/365×10 = 20 of cash. Test whether tighter credit loses good customers or merely shifts sales to competitors.',
          {formula:'CCC=DIO+DSO−DPO',symbols:'DIO là ngày tồn kho; DSO là ngày phải thu; DPO là ngày phải trả. Mỗi thành phần phải dùng flow phù hợp ở mẫu số.|DIO is inventory days; DSO is receivable days; DPO is payable days. Each component needs the corresponding flow in its denominator.',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/working-capital-and-liquidity'}),
        fullUnit('npv','NPV và quyết định dự án|NPV and project decisions',
          'NPV đo phần giá trị tăng thêm sau khi bù chi phí cơ hội của vốn. Chỉ dùng dòng tiền tăng thêm sau thuế; loại sunk cost, đưa opportunity cost, cannibalization, vốn lưu động và terminal cash flow vào đúng thời điểm.|NPV measures value added after covering opportunity cost of capital. Use incremental after-tax cash flows only; exclude sunk costs and include opportunity cost, cannibalization, working capital and terminal cash flows at the right dates.',
          ['NPV dương tạo giá trị dưới giả định đã dùng|Positive NPV creates value under the stated assumptions','IRR có thể sai khi dòng tiền đổi dấu nhiều lần|IRR can mislead with multiple sign changes','Sunk cost không đổi theo quyết định hiện tại|Sunk costs do not change with the current decision','Real options có giá trị khi cho phép chờ, mở rộng hoặc dừng|Real options add value through delay, expansion or abandonment'],
          'Dự án máy đóng gói tự động|An automated packaging project',
          'Máy tốn 100 hôm nay, cần thêm 10 vốn lưu động. Nó tạo 38 dòng tiền sau thuế mỗi cuối năm trong bốn năm; năm 4 thu hồi 10 vốn lưu động và bán máy được 8 sau thuế. Suất chiết khấu là 10%.|The machine costs 100 today and needs 10 working capital. It produces 38 after-tax cash flow at each year-end for four years; in year 4, 10 of working capital is recovered and the machine is sold for 8 after tax. Discount rate is 10%.',
          'NPV là bao nhiêu và đâu là lỗi mô hình thường gặp?|What is NPV, and what common modeling error should be avoided?',
          'NPV = −110 + 38/1,1 + 38/1,1² + 38/1,1³ + 56/1,1⁴ ≈ 24,0, nên dự án tạo giá trị theo giả định. Lỗi phổ biến là quên vốn lưu động ban đầu hoặc thu hồi cuối kỳ, dùng lợi nhuận kế toán thay cash flow, hoặc chiết khấu chi phí lãi vay dù WACC đã phản ánh financing.|NPV = −110 + 38/1.1 + 38/1.1² + 38/1.1³ + 56/1.1⁴ ≈ 24.0, so the project adds value under the assumptions. Common errors include omitting working-capital investment/recovery, using accounting profit instead of cash flow, or subtracting interest when WACC already reflects financing.',
          {formula:'NPV=−I₀+Σfrac(CFₜ;(1+r)ᵗ)',symbols:'I₀ là đầu tư ban đầu gồm vốn lưu động; CFₜ là dòng tiền tăng thêm sau thuế kỳ t; r là suất chiết khấu phù hợp rủi ro; t là thời gian.|I₀ is initial investment including working capital; CFₜ is incremental after-tax cash flow; r is the risk-appropriate discount rate; t is time.',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/capital-investments-and-capital-allocation'}),
        fullUnit('wacc','Chi phí vốn và cấu trúc vốn|Cost of capital and capital structure',
          'WACC là lợi suất yêu cầu bình quân của người cung cấp vốn cho tài sản hiện tại. Trọng số dùng giá trị thị trường, chi phí nợ sau thuế và chi phí equity theo rủi ro. Dự án có rủi ro khác doanh nghiệp cần suất chiết khấu khác.|WACC is the weighted required return of capital providers on existing assets. Use market-value weights, after-tax debt cost and risk-based equity cost. A project with different risk needs a different discount rate.',
          ['Không dùng lãi coupon lịch sử làm chi phí nợ mới|Do not use historical coupons as current debt cost','Target leverage phù hợp hơn snapshot méo mó|Target leverage may beat a distorted snapshot','Tax shield giảm chi phí nợ nhưng distress tăng theo leverage|Tax shields lower debt cost while distress rises with leverage','Currency và kỳ hạn dòng tiền phải khớp discount rate|Currency and horizon of cash flows must match the rate'],
          'Doanh nghiệp định giá dự án bằng WACC|A company discounts a project with WACC',
          'Giá trị thị trường equity là 600, debt là 400. Chi phí equity 12%, chi phí nợ trước thuế 6%, thuế suất biên 25%.|Market equity is 600 and debt 400. Equity cost is 12%, pre-tax debt cost is 6% and marginal tax rate is 25%.',
          'WACC là bao nhiêu và có thể dùng cho dự án khai khoáng ở quốc gia rủi ro cao không?|What is WACC, and can it be used for a high-risk mining project in another country?',
          'WACC = 60%×12% + 40%×6%×(1−25%) = 9,0%. Không tự động dùng 9% cho dự án có commodity, country và operating risk cao hơn tài sản hiện hữu. Ước lượng beta/credit spread theo tài sản tương đương, currency và target capital structure của dự án.|WACC = 60%×12% + 40%×6%×(1−25%) = 9.0%. Do not automatically use 9% for a project with higher commodity, country and operating risk than existing assets. Estimate asset risk, credit spreads, currency and target structure from relevant comparables.',
          {formula:'WACC=wₑrₑ+w_d r_d(1−T)',symbols:'wₑ và w_d là trọng số giá trị thị trường của equity và debt; rₑ là chi phí equity; r_d là chi phí nợ trước thuế; T là thuế suất biên.|wₑ and w_d are market-value weights of equity and debt; rₑ is equity cost; r_d is pre-tax debt cost; T is the marginal tax rate.',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/cost-capital-advanced-topics'}),
        fullUnit('restructuring','M&A, tái cấu trúc và hành động doanh nghiệp|M&A, restructuring and corporate actions',
          'Một thương vụ chỉ tạo giá trị cho bên mua nếu giá trị synergy thực hiện được vượt premium và chi phí tích hợp. Tách động cơ chiến lược khỏi empire building; mô hình pro forma phải bao gồm financing, dilution, leverage, thuế, chi phí một lần và rủi ro thực thi.|A transaction creates buyer value only when realizable synergy exceeds premium and integration cost. Separate strategy from empire building; pro forma models need financing, dilution, leverage, tax, one-off costs and execution risk.',
          ['Định giá standalone trước khi cộng synergy|Value the target standalone before adding synergy','Không vốn hóa toàn bộ synergy vào giá mua|Do not give all synergy value to the seller','EPS accretion không đồng nghĩa NPV dương|EPS accretion does not imply positive NPV','Divestiture có thể tăng focus nhưng mất shared costs|Divestitures may improve focus while losing shared-cost benefits'],
          'Mua đối thủ với premium lớn|Buying a rival at a large premium',
          'Target có standalone value 300. Bên mua ước tính cost synergy trước thuế 30 mỗi năm vĩnh viễn, thuế 25%, discount rate 10% và integration cost 40 hôm nay. Giá chào là 500.|The target has standalone value 300. Buyer estimates perpetual pre-tax cost synergy of 30 annually, tax 25%, discount rate 10% and 40 integration cost today. Offer price is 500.',
          'Thương vụ tạo bao nhiêu giá trị cho cổ đông bên mua trước rủi ro thực thi?|How much value does the deal create for buyer shareholders before execution risk?',
          'PV synergy sau thuế = 30×(1−25%)/10% = 225. Tổng giá trị khả dụng = 300 + 225 − 40 = 485, thấp hơn giá mua 500; NPV cho bên mua là −15 ngay cả khi synergy đạt đủ. Cần giảm giá, tăng bằng chứng synergy hoặc từ bỏ. Accretion EPS do dùng nợ rẻ không sửa được NPV âm.|After-tax synergy PV = 30×(1−25%)/10% = 225. Total available value = 300 + 225 − 40 = 485, below the 500 offer; buyer NPV is −15 even if synergy is fully achieved. Lower price, strengthen synergy evidence or walk away. Debt-funded EPS accretion does not repair negative NPV.',
          {formula:'NPV_acquirer=V_T+PV(Synergy)−Cost_integration−Price',symbols:'V_T là giá trị standalone của target; PV(Synergy) là giá trị hiện tại synergy sau thuế; Price là toàn bộ consideration; kết quả dương mới tạo giá trị cho bên mua.|V_T is target standalone value; PV(Synergy) is after-tax synergy value; Price is total consideration; only a positive result creates buyer value.',source:'https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/corporate-restructuring'})
      ]
    },
    planned('equity','core','CFA 06','Đầu tư cổ phiếu|Equity Investments','Thị trường, ngành, lợi thế doanh nghiệp, dòng tiền và mô hình định giá cổ phiếu.|Markets, industries, business quality, cash flow and equity valuation.',['I','II'],3,[
      'Cấu trúc thị trường và chỉ số|Markets and indexes','Phân tích ngành và lợi thế|Industry and competitive advantage','Dự báo doanh thu, biên và ROIC|Forecasting revenue, margin and ROIC','DDM, FCFE và định giá tương đối|DDM, FCFE and relative valuation','Luận điểm, rủi ro và biên an toàn|Thesis, risk and margin of safety'
    ]),
    planned('fixed-income','core','CFA 07','Đầu tư trái phiếu|Fixed Income','Dòng tiền, lợi suất, đường cong lãi suất, duration, tín dụng và sản phẩm có quyền chọn.|Cash flows, yields, curves, duration, credit and option-embedded securities.',['I','II','III'],3,[
      'Cấu trúc trái phiếu và lợi suất|Bond structures and yields','Định giá theo lãi suất giao ngay|Spot-rate valuation','Duration, convexity và rủi ro lãi suất|Duration, convexity and rate risk','Tín dụng, thu hồi và spread|Credit, recovery and spreads','Danh mục trái phiếu và phòng hộ|Fixed-income portfolios and hedging'
    ]),
    planned('derivatives','core','CFA 08','Công cụ phái sinh và quản trị rủi ro|Derivatives and Risk Management','Kỳ hạn, tương lai, quyền chọn, hoán đổi, không arbitrage và ứng dụng phòng hộ.|Forwards, futures, options, swaps, no-arbitrage and hedging applications.',['I','II','III'],3,[
      'Payoff, profit và no-arbitrage|Payoff, profit and no-arbitrage','Kỳ hạn và tương lai|Forwards and futures','Quyền chọn và các Greek|Options and Greeks','Hoán đổi và định giá|Swaps and valuation','Thiết kế chiến lược phòng hộ|Designing a hedge'
    ]),
    planned('alternatives','core','CFA 09','Đầu tư thay thế|Alternative Investments','Bất động sản, hạ tầng, vốn tư nhân, private credit, hedge funds, hàng hóa và tài sản số.|Real estate, infrastructure, private capital, private credit, hedge funds, commodities and digital assets.',['I','II'],3,[
      'Đặc điểm, phí và thanh khoản|Characteristics, fees and liquidity','Bất động sản và hạ tầng|Real estate and infrastructure','Private equity, venture và private credit|Private equity, venture and private credit','Hedge funds và hàng hóa|Hedge funds and commodities','Định giá, rủi ro và đo hiệu quả|Valuation, risk and performance'
    ]),
    planned('portfolio','core','CFA 10','Quản lý danh mục và hoạch định tài sản|Portfolio Management and Wealth Planning','IPS, phân bổ tài sản, đa dạng hóa, rủi ro, hành vi và danh mục cá nhân/tổ chức.|IPS, asset allocation, diversification, risk, behavior and individual or institutional portfolios.',['I','II','III'],4,[
      'Mục tiêu, ràng buộc và IPS|Objectives, constraints and IPS','Đo lợi suất và rủi ro danh mục|Portfolio return and risk','Đa dạng hóa, CAPM và beta|Diversification, CAPM and beta','Phân bổ, tái cân bằng và thuế|Allocation, rebalancing and tax','Wealth planning và quản trị rủi ro|Wealth planning and risk management'
    ]),
    planned('asset-allocation','advanced','L3 01','Phân bổ tài sản|Asset Allocation','Kỳ vọng thị trường vốn, phân bổ chiến lược, chiến thuật và danh mục theo nghĩa vụ.|Capital market expectations, strategic and tactical allocation and liability-aware portfolios.',['III'],4,[
      'Kỳ vọng lợi suất và rủi ro|Return and risk expectations','Phân bổ chiến lược|Strategic allocation','Phân bổ chiến thuật|Tactical allocation','Goals-based và liability-driven|Goals-based and liability-driven','Stress test và quản trị thanh khoản|Stress testing and liquidity'
    ]),
    planned('performance','advanced','L3 02','Đo lường và đánh giá hiệu quả|Performance Measurement','Attribution, appraisal, GIPS, lựa chọn quản lý và chất lượng thực thi.|Attribution, appraisal, GIPS, manager selection and execution quality.',['III'],4,[
      'Time-weighted và money-weighted return|Time- and money-weighted return','Attribution theo tài sản và yếu tố|Asset and factor attribution','Đánh giá kỹ năng điều chỉnh rủi ro|Risk-adjusted appraisal','Trình bày kết quả và GIPS|Performance presentation and GIPS','Lựa chọn và giám sát nhà quản lý|Manager selection and monitoring'
    ]),
    planned('pathways','advanced','L3 03','Các hướng chuyên sâu Level III|Level III Pathways','Portfolio Management, Private Markets và Private Wealth qua case study và bản ghi nhớ quyết định.|Portfolio Management, Private Markets and Private Wealth through cases and decision memos.',['III'],4,[
      'Chọn pathway và năng lực mục tiêu|Choosing a pathway and target skills','Portfolio Management case|Portfolio Management case','Private Markets case|Private Markets case','Private Wealth case|Private Wealth case','Capstone cho ủy ban đầu tư|Investment committee capstone'
    ])
  ];

  const current={courseId:null,unitIndex:0};
  const completionSet=()=>new Set(state.deepCourseCompleted||[]);
  const completionKey=(course,unit)=>'deep|'+course.id+'|'+unit.id;
  const courseDone=course=>course.units.filter(unit=>completionSet().has(completionKey(course,unit))).length;
  const bookmarkKey=course=>'course:'+course.id;
  const visibleCourses=()=>courses.filter(course=>course.levels.includes(studyLevel));
  const groupLabel={
    foundation:'NỀN TẢNG TRƯỚC CFA|FOUNDATIONS BEFORE CFA',
    core:'CHƯƠNG TRÌNH CFA CỐT LÕI|CFA CORE CURRICULUM',
    advanced:'LEVEL III VÀ ỨNG DỤNG|LEVEL III AND APPLICATION'
  };
  const groupDescription={
    foundation:'Đọc trước để hiểu doanh nghiệp, pháp lý và ngôn ngữ kế toán.|Read first to understand businesses, legal structure and accounting language.',
    core:'Mười nhóm năng lực cốt lõi theo cấu trúc CFA Institute.|Ten core competency areas aligned with CFA Institute.',
    advanced:'Phân bổ, đo hiệu quả và ba hướng chuyên sâu của Level III.|Allocation, performance and the three Level III pathways.'
  };

  function courseMatches(course){
    const haystack=[course.title,course.description,...course.units.map(unit=>unit.title)].join(' ').toLowerCase();
    if(currentSearch&&!haystack.includes(currentSearch))return false;
    const done=courseDone(course),saved=state.bookmarkedModules.includes(bookmarkKey(course));
    if(currentFilter==='completed'&&done!==course.units.length)return false;
    if(currentFilter==='studying'&&(!done||done===course.units.length))return false;
    if(currentFilter==='bookmarked'&&!saved)return false;
    return true;
  }

  function courseCard(course){
    const done=courseDone(course),pct=Math.round(done/course.units.length*100);
    const saved=state.bookmarkedModules.includes(bookmarkKey(course));
    const ready=course.status==='ready';
    return '<article class="course-card '+(ready?'':'is-planned')+'">'+
      '<div class="course-card-top"><span class="course-code">'+esc(course.code)+' · LEVEL '+esc(course.levels.join('/'))+'</span>'+
      '<span class="course-status '+(ready?'ready':'')+'">'+esc(ready?tr('ĐÃ CÓ NỘI DUNG|CONTENT READY'):tr('ĐỢT |BATCH ')+course.batch)+'</span></div>'+
      '<h4>'+esc(tr(course.title))+'</h4><p>'+esc(tr(course.description))+'</p>'+
      '<div class="course-card-footer"><div class="course-progress"><span>'+done+'/'+course.units.length+' '+esc(tr('bài hoàn thành|units completed'))+'</span><span class="course-progress-track"><i style="width:'+pct+'%"></i></span></div>'+
      '<div class="flex items-center gap-3"><button aria-label="'+esc(tr('Đánh dấu khóa học|Bookmark course'))+'" aria-pressed="'+saved+'" onclick="toggleDeepCourseBookmark(\''+course.id+'\')">'+(saved?'★':'☆')+'</button>'+
      '<button class="course-open" '+(ready?'onclick="openDeepCourse(\''+course.id+'\',0)"':'disabled')+'>'+esc(tr(ready?'Mở khóa học →|Open course →':'Nội dung ở đợt |Content in batch ')+(!ready?course.batch:''))+'</button></div></div></article>';
  }

  function renderRoadmap(){
    const list=visibleCourses(),ready=list.filter(course=>course.status==='ready');
    const totalUnits=ready.reduce((sum,course)=>sum+course.units.length,0);
    const complete=ready.reduce((sum,course)=>sum+courseDone(course),0);
    byId('active-level-label').textContent='LVL '+studyLevel;
    document.querySelector('[data-i18n="libraryHeading"]').textContent=tr('Lộ trình CFA Level '+studyLevel+'|CFA Level '+studyLevel+' learning roadmap');
    byId('overall-mastery-pct').textContent=(totalUnits?Math.round(complete/totalUnits*100):0)+'%';
    byId('overall-mastery-bar').style.width=(totalUnits?Math.round(complete/totalUnits*100):0)+'%';
    byId('overall-mastery-pct').nextElementSibling.textContent='('+complete+'/'+totalUnits+')';
    let html='<section class="course-roadmap-intro"><div><span class="lesson-kicker">'+esc(tr('CHƯƠNG TRÌNH MỚI · ĐỢT 2|NEW CURRICULUM · BATCH 2'))+'</span><h2>'+esc(tr('Học theo khóa, không học theo danh sách xổ xuống|Learn by course, not by expanding lists'))+'</h2><p>'+esc(tr('Mỗi khóa có đúng 5 bài độc lập. Khi mở khóa học, chọn một bài ở cột trái và chỉ nội dung của bài đó xuất hiện. Đợt 2 đã mở thêm Quantitative Methods, Economics, Financial Statement Analysis và Corporate Finance với case study, công thức, lời giải và nguồn nghiên cứu.|Each course has exactly five independent units. Open a course, choose one unit on the left and only that unit appears. Batch 2 adds Quantitative Methods, Economics, Financial Statement Analysis and Corporate Finance with cases, formulas, worked reasoning and research sources.'))+'</p></div>'+
      '<div class="course-roadmap-summary"><strong>'+list.length+'</strong><span>'+esc(tr('khóa trong roadmap Level '+studyLevel+'|courses in the Level '+studyLevel+' roadmap'))+'</span><strong>'+totalUnits+'</strong><span>'+esc(tr('bài chuyên sâu đã sẵn sàng|deep units currently ready'))+'</span></div></section>';
    for(const group of ['foundation','core','advanced']){
      const items=list.filter(course=>course.group===group&&courseMatches(course));
      if(!items.length)continue;
      html+='<section class="course-section"><div class="course-section-head"><h3>'+esc(tr(groupLabel[group]))+'</h3><p>'+esc(tr(groupDescription[group]))+'</p></div><div class="course-grid">'+items.map(courseCard).join('')+'</div></section>';
    }
    byId('modules-list-container').innerHTML=html||'<div class="course-phase-note">'+esc(tr('Không có khóa phù hợp với bộ lọc.|No courses match this filter.'))+'</div>';
  }

  function lessonHtml(course,unit,index){
    const done=completionSet().has(completionKey(course,unit));
    const formula=unit.formula?'<div class="lesson-formula">'+equation(unit.formula)+'<p>'+esc(tr(unit.symbols))+'</p></div>':'';
    const video=unit.videoId?'<section class="lesson-video"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/'+esc(unit.videoId)+'" title="'+esc(unit.videoTitle)+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="lesson-video-meta"><span>'+esc(unit.videoTitle)+'</span><a href="https://www.youtube.com/watch?v='+esc(unit.videoId)+'" target="_blank" rel="noopener noreferrer">YouTube ↗</a></div></section>':'';
    const disclaimer=course.disclaimer?'<div class="course-phase-note">'+esc(tr(course.disclaimer))+'</div>':'';
    return '<article class="course-unit-detail" id="course-unit-detail"><span class="lesson-kicker">'+esc(course.code)+' · '+String(index+1).padStart(2,'0')+'/05</span><h3>'+esc(tr(unit.title))+'</h3><p class="lesson-lead">'+esc(tr(unit.lead))+'</p>'+disclaimer+
      '<section class="lesson-block"><h4>'+esc(tr('Khung phân tích cần nhớ|Decision framework'))+'</h4><div class="lesson-points">'+unit.points.map(point=>'<div class="lesson-point">'+esc(tr(point))+'</div>').join('')+'</div></section>'+formula+
      '<section class="lesson-case"><small>'+esc(tr('CASE STUDY · TÌNH HUỐNG GIẢ ĐỊNH|CASE STUDY · SIMULATION'))+'</small><h4>'+esc(tr(unit.caseTitle))+'</h4><p class="case-question">'+esc(tr(unit.caseFacts))+'</p><p class="case-question"><strong>'+esc(tr('Câu hỏi quyết định: |Decision question: '))+'</strong>'+esc(tr(unit.caseQuestion))+'</p><div class="case-solution"><strong>'+esc(tr('Lập luận và kết luận|Reasoning and conclusion'))+'</strong><br>'+esc(tr(unit.solution))+'</div></section>'+video+
      '<div class="lesson-actions"><a class="lesson-source" href="'+esc(unit.source||course.source||officialCurriculum)+'" target="_blank" rel="noopener noreferrer">'+esc(tr('Nguồn nghiên cứu ↗|Research source ↗'))+'</a><div class="lesson-actions-group">'+
      (index?'<button class="lesson-secondary" onclick="selectDeepUnit('+(index-1)+')">← '+esc(tr('Bài trước|Previous'))+'</button>':'')+
      '<button class="lesson-complete '+(done?'done':'')+'" onclick="toggleDeepUnitComplete()">'+esc(tr(done?'✓ Đã hoàn thành|✓ Completed':'Đánh dấu hoàn thành|Mark complete'))+'</button>'+
      (index<course.units.length-1?'<button class="lesson-secondary" onclick="selectDeepUnit('+(index+1)+')">'+esc(tr('Bài tiếp|Next'))+' →</button>':'')+'</div></div></article>';
  }

  function renderCourseModal(){
    const course=courses.find(item=>item.id===current.courseId);
    if(!course||course.status!=='ready')return;
    const unit=course.units[current.unitIndex];
    const complete=completionSet();
    byId('drawer-module-code').textContent=course.code+' · LEVEL '+course.levels.join('/');
    byId('drawer-module-title').textContent=tr(course.title);
    byId('drawer-los-counter').textContent=courseDone(course)+'/5';
    const sourceButton=byId('drawer-course-source');
    if(sourceButton){sourceButton.removeAttribute('onclick');sourceButton.textContent=tr('Nguồn khóa học|Course sources');sourceButton.onclick=()=>window.open(course.source||officialCurriculum,'_blank','noopener')}
    const nav='<nav class="course-unit-nav" aria-label="'+esc(tr('Năm bài trong khóa học|Five course units'))+'"><span class="course-unit-nav-label">'+esc(tr('Chọn một bài|Choose one unit'))+'</span>'+course.units.map((item,index)=>
      '<button class="course-unit-button" aria-current="'+(index===current.unitIndex)+'" onclick="selectDeepUnit('+index+')"><span class="course-unit-number">'+String(index+1).padStart(2,'0')+'</span><span class="course-unit-name">'+esc(tr(item.title))+'</span><span class="course-unit-check">'+(complete.has(completionKey(course,item))?'✓':'')+'</span></button>'
    ).join('')+'</nav>';
    byId('drawer-los-list').innerHTML='<div class="course-modal-layout">'+nav+lessonHtml(course,unit,current.unitIndex)+'</div>';
  }

  window.openDeepCourse=(courseId,unitIndex=0)=>{
    current.courseId=courseId;current.unitIndex=unitIndex;renderCourseModal();
    byId('los-drawer').classList.remove('hidden');byId('los-drawer').classList.add('flex');
  };
  window.selectDeepUnit=index=>{current.unitIndex=index;renderCourseModal();byId('course-unit-detail')?.scrollTo?.(0,0)};
  window.toggleDeepUnitComplete=()=>{
    const course=courses.find(item=>item.id===current.courseId),unit=course.units[current.unitIndex];
    const set=completionSet(),key=completionKey(course,unit);set.has(key)?set.delete(key):set.add(key);
    state.deepCourseCompleted=[...set];saveState();renderRoadmap();renderCourseModal();
  };
  window.toggleDeepCourseBookmark=courseId=>{
    const course=courses.find(item=>item.id===courseId),key=bookmarkKey(course),set=new Set(state.bookmarkedModules);
    set.has(key)?set.delete(key):set.add(key);state.bookmarkedModules=[...set];saveState();renderRoadmap();
  };
  window.renderLibraryModules=renderRoadmap;

  const priorRefresh=window.refreshWorkspace;
  window.refreshWorkspace=function(){priorRefresh();if(current.courseId)renderCourseModal()};

  const priorClose=window.closeLosDrawer;
  window.closeLosDrawer=function(){current.courseId=null;priorClose()};
})();

